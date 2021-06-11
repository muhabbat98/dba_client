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
  ...rest
}) => {
  const refInput = useRef<any>();
  
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [onlyLetter, setOnlyLetter] = useState<any>("");
  useEffect(()=>{
    if(refInput.current){
      const leng=refInput.current.value
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
  // function formatPhoneNumber(phoneNumber:any) {
  //   const cleanNum = phoneNumber.toString().replace(/\D/g, '');
  //   const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
  //   if (match) {
  //     return '(' + match[1] + ') ' + (match[2] ? match[2] + "-" : "") + match[3];
  //   }
  //   return cleanNum;
  // }
  const inputMaskType = () => {
    if (inputType == "phone") {
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="+\9\98 99 999 99 99"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}  
          placeholder={placeholder}
          
        />
      );
    } else if (inputType == "card") {
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask="9999 9999 9999 9999"
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}  
          placeholder={placeholder}
          
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
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}  
          placeholder={placeholder}
          
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
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}
          placeholder={placeholder}  
          
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
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}  
          placeholder={placeholder}
          
        />
        )
    }
    else if(inputType=="inn"){
      return (
        <Controller
          ref={refInput}
          as={MaskInput}
          control={control}
          mask={"999 999999"}
          name={name}
          defaultValue={defaultValue}
          value={value}
          isFocus={isFocus}
          error={error?true:false}  
          placeholder={placeholder}
          
        />
        )
    }
    // else if(inputType=="letter"){
    //   return (
    //     <InputElement
    //       {...rest}
    //       name={name}
    //       ref={refInput}
    //       autoFocus ={isFocus?true:false}
    //       placeholder={!isFocus ? placeholder : ""}
    //       isFocus={isFocus}
    //       onBlur={(e) => onBlur(e)}
    //       error={error?true:false}    
    //       defaultValue={defaultValue}
    //       value={onlyLetter}
    //       onChange={(e)=>setOnlyLetter(formatPhoneNumber(e.target.value))}
    //     />
        
    //     )
    // }
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
      <Label isFocus={isFocus} error={error?true:false}>{label}</Label>
      } 

      {inputType ? (
        inputMaskType()
      ) : (
        <InputElement
          {...rest}
          name={name}
          value={value}
          ref={refInput}
          autoFocus ={isFocus?true:false}
          placeholder={!isFocus ? placeholder : ""}
          isFocus={isFocus}
          onBlur={(e) => onBlur(e)}
          error={error?true:false}    
          defaultValue={defaultValue}
        />
      )}
      
    </InputWrapper>
    {error && <ErrorTitle>{error}</ErrorTitle>}
  </>
  );
};

export default Input;
