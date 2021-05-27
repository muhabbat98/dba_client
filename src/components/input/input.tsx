import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { InputWrapper, MaskInput, InputElement, Label,ErrorTitle } from "./style";

interface InputFilds extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: "phone" | "card" | "cardData" | "passport" | "brithDay";
  control?: any;
  error?:string; //Error Text
}

const Input: React.FC<InputFilds> = ({
  label,
  inputType,
  error,
  placeholder,
  control,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(inputType ? true : false);
  const onBlur = (e: any) => {
    const val = e.target.value;
    if (val.length > 0 || inputType) {
      setIsFocus(true);
    } else setIsFocus(false);
  };
  const inputMaskType = () => {
    if (inputType == "phone") {
      return (
        <Controller
          as={MaskInput}
          control={control}
          mask="+\9\98 99 999 99 99"
          name={inputType}
        />
      );
    } else if (inputType == "card") {
      return (
        <Controller
          as={MaskInput}
          control={control}
          mask="9999 9999 9999 9999"
          name={inputType}
        />
      );
    }
    else if(inputType=="cardData"){
      return (
        <Controller
          as={MaskInput}
          control={control}
          mask="99/99"
          name={inputType}
        />
        )
    }
    else if(inputType=="brithDay"){
      return (
        <Controller
          as={MaskInput}
          control={control}
          mask="99/99/9999"
          name={inputType}
        />
        )
    }
    else if(inputType=="passport"){
      return (
        <Controller
          as={MaskInput}
          control={control}
          mask={"aa 99999"}
          name={inputType}
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
