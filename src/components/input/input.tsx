import React, { useState,useEffect} from "react";
import { InputWrapper, MaskInput, InputElement, Label,ErrorTitle } from "./style";
import { v4 as uuidv4 } from 'uuid';
import inputLetter,{email,passport,cardNumber,cardDate,inn, phoneMask,anotherThreepleCard} from '../../utils/input-letter'
interface InputFilds extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputType?: "phone" | "card" | "cardData" | "passport" | "brithDay"| "inn" | "letter" | "email"|"anotherThreepleCard";
  error?:any; //Error Text
  name?:any,
  value?:any
  style?:any
  register?:any
  watch?:any
  defVal?:string
  type?:any
  setValue?:any
  defaultValue?:string
  control?: any
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
  watch,
  defVal,
  type,
  setValue,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [id,setId] = useState<string>('');
  useEffect(()=>{
    const val:any = document.querySelector('.inputt');
    if(val){
      const leng=val.value
      if(leng.length>0) {
        setIsFocus(true);
      }
    }

  })
  useEffect(() => {setId(uuidv4());},[])
  useEffect(() => {
    defVal && setValue(name,defVal)
}, [defVal])
  const onBlur = (e: any) => {
    
    setIsFocus(true);
    const val = e.target.value;
    if (val.length > 0 ) {
      setIsFocus(true);

    } else setIsFocus(false);
  };
  const change = () =>{
    
  }
  const inputMaskType = () => {
    if (inputType == "phone") {
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 13 })}
          name={name}
          onChange={change}
          value={phoneMask( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
      );
    } else if (inputType == "card") {
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 19 })}
          name={name}
          onChange={change}
          value={cardNumber( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
      );
    }
    else if(inputType=="cardData"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 5 })}
          name={name}
          onChange={change}
          value={cardDate( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
        )
    }
    else if(inputType=="anotherThreepleCard"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 14 })}
          name={name}
          onChange={change}
          value={anotherThreepleCard( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
        )
    }
    else if(inputType=="email"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true,pattern: {value: /^\S+@\S+\.\S+$/i,} })}
          name={name}
          onChange={change}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
        )
    }
    else if(inputType=="passport"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 10 })}
          name={name}
          onChange={change}
          value={passport( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
        />
        )
    }
    else if(inputType=="inn"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true, minLength: 10 })}
          name={name}
          onChange={change}
          value={inn( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
  
        />
        )
    }
    else if(inputType=="letter"){
      return (
        <InputElement
          id={id}
          className="inputt"
          ref={register({ required: true })}
          name={name}
          onChange={change}
          value={inputLetter( watch)}
          isfocus={isFocus}
          err={error?"true":"false"}  
          placeholder={placeholder}
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
      <Label htmlFor={id} isfocus={isFocus} err={error?"true":"false"} >{label} </Label>
      } 

      {inputType ? (
        inputMaskType()
      ) : (
        <InputElement
          {...rest}
          id={id}
          className="inputt"
          name={name}
          type={type}
          ref={register({ required: true})}
          autoFocus ={isFocus?true:false}
          placeholder={!isFocus ? placeholder : ""}
          isfocus={isFocus}
          onBlur={(e) => onBlur(e)}
          err={error?"true":"false"}    
          
      
        />
      )}
      
    </InputWrapper>
      {error && <ErrorTitle>Поля не заполнены</ErrorTitle>}
  </>
  );
};

export default Input;
