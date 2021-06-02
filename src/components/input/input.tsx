import React, { useState,useEffect,useRef } from "react";
import { Controller } from "react-hook-form";
import { InputWrapper, MaskInput, InputElement, Label,ErrorTitle } from "./style";

interface InputFilds extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: "phone" | "card" | "cardData" | "passport" | "brithDay";
  control?: any;
  error?:string; //Error Text
  defaultValue?:string;
}

const Input: React.FC<InputFilds> = ({
  label,
  inputType,
  error,
  placeholder,
  control,
  defaultValue,
  ...rest
}) => {
  const refInput = useRef<any>();
  
  const [isFocus, setIsFocus] = useState<boolean>(inputType ? true : false);
  useEffect(()=>{
    if(refInput.current){
      const leng=refInput.current.value
      if(leng.length>0) {
        setIsFocus(true);
      }
    }
    

  })

  const onBlur = (e: any) => {
    const val = e.target.value;
    if (val.length > 0 ) {
      setIsFocus(true);
      console.log("Blur working")
    } else setIsFocus(false);
  };
  const inputMaskType = () => {
    if (inputType == "phone") {
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="+\9\98 99 999 99 99"
          name={inputType}
          defaultValue={defaultValue}
        />
      );
    } else if (inputType == "card") {
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="9999 9999 9999 9999"
          name={inputType}
          defaultValue={defaultValue}
          
        />
      );
    }
    else if(inputType=="cardData"){
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="99/99"
          name={inputType}
          defaultValue={defaultValue}
          
        />
        )
    }
    else if(inputType=="brithDay"){
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="99/99/9999"
          name={inputType}
          defaultValue={defaultValue}
        />
        )
    }
    else if(inputType=="passport"){
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask={"aa 99999"}
          name={inputType}
          defaultValue={defaultValue}
        />
        )
    }
  };
  return (
  <>
    <InputWrapper error={error?true:false} onFocus={() => setIsFocus(true)} >
      <Label isFocus={isFocus} error={error?true:false}>{label}</Label>
      {inputType ? (
        inputMaskType()
      ) : (
        <InputElement
          {...rest}
          ref={refInput}
          autoFocus ={isFocus?true:false}
          placeholder={!isFocus ? placeholder : ""}
          isFocus={isFocus}
          onBlur={(e) => onBlur(e)}
          error={error?true:false}    
        />
      )}
      
    </InputWrapper>
    {error && <ErrorTitle>{error}</ErrorTitle>}
  </>
  );
};

export default Input;
