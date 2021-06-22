import React, { useState,useEffect,useRef } from "react";
import { Controller } from "react-hook-form";
import { InputWrapper, MaskInput, InputElement, Label,ErrorTitle } from "./style";

interface InputFilds extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: "phone" | "card" | "cardData" | "passport" | "brithDay"| "inn" | "letter";
  control?: any;
  error?:string; //Error Text
  defaultValue?:string;
  name?:any,
  value?:any
  style?:any
  register?:any
}

const Input: React.FC<InputFilds> = ({
  label,
  inputType,
  error,
  placeholder,
  control,
  defaultValue,
  name,
  value,
  style,
  register,
  ...rest
}) => {
  const refInput = useRef<any>();
  
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useEffect(()=>{
    const val:any = document.querySelector('#inputt');
    if(val){
      const leng=val.value
      if(leng.length>0) {
        setIsFocus(true);
      }
    }

  })

  const onBlur = (e: any) => {
    // console.log("Blur working....")
    setIsFocus(true);
    const val = e.target.value;
    if (val.length > 0 ) {
      setIsFocus(true);
      // console.log("Blur working....")
    } else setIsFocus(false);
  };
  
  const inputMaskType = () => {
    if (inputType == "phone") {
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask="+\9\98 99 999 99 99"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
          {...{required:true}}
        />
      );
    } else if (inputType == "card") {
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask="9999 9999 9999 9999"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
          {...{required:true}}
        />
      );
    }
    else if(inputType=="cardData"){
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask="99/99"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
          {...{required:true}}
        />
        )
    }
    else if(inputType=="brithDay"){
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask="99/99/9999"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}
          placeholder={placeholder}  
          {...{required:true}}
        />
        )
    }
    else if(inputType=="passport"){
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask={"aa 9999999"}
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
          {...{required:true}}
        />
        )
    }
    else if(inputType=="inn"){
      return (
        <Controller
          // ref={refInput}
          as={MaskInput}
          control={control}
          mask={"999 999999"}
          name={name}
          defaultValue={defaultValue}
          value={value}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
          {...{required:true}}
        />
        )
    }
   
  };
 
  return (
  <>
    <InputWrapper  
      error={error?true:false} 
      onFocus={() => setIsFocus(true)}
      onBlur={(e) => onBlur(e)}
      style={style}
    >
      {isFocus &&
      <Label isfocus={isFocus} err={error?true:false}>{label}</Label>
      } 

      {inputType ? (
        inputMaskType()
      ) : (
        <InputElement
          {...rest}
          id="inputt"
          name={name}
          value={value}
          ref={register}
          autoFocus ={isFocus?true:false}
          placeholder={!isFocus ? placeholder : ""}
          isfocus={isFocus}
          onBlur={(e) => onBlur(e)}
          err={error?"true":"false"}    
          {...{required:true}}
          // defaultValue={defaultValue}
        />
      )}
      
    </InputWrapper>
    {error && <ErrorTitle>{error}</ErrorTitle>}
  </>
  );
};

export default Input;
