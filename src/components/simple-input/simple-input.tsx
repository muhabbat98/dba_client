import React, { useEffect, useState } from 'react';
import {} from './style'
import { InputElement, InputWrapper, Label } from './style';
import inputLetter, { onlyNumber } from '../../utils/input-letter';

interface Propses extends React.InputHTMLAttributes<HTMLInputElement> {
    label?:string,
    placeholder?:string,
    style?:any,
    ref?:any,
    defaultValue?:any,
    inputType?: 'string' | 'number';
}
const SimpleInput:React.FC<Propses> = ({label,ref,placeholder,defaultValue,style,inputType,...rest}) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [number,setNumber] = useState<any>(null);
    const [string,setString] = useState<any>(null);
    const [id,setId] = useState<string>('');
    useEffect(()=>{
        const val:any = document.querySelector('.inputt');
        if(defaultValue&&defaultValue.length>0){
            setIsFocus(true);
        }
        if(val){
            const leng=val.value
            if(leng.length>0) {
                setIsFocus(true);
            }
        }

    })
    const onBlur = (e: any) => {
        setIsFocus(true);
        const val = e.target.value;
        if (val.length > 0 ) {
            setIsFocus(true);

        } else setIsFocus(false);
    };
    const inputMaskType = () => {
        if (inputType == "number") {
            return (
                <InputElement
                    {...rest}
                    ref={ref}
                    onChange={(e:any)=>setNumber(onlyNumber(e.target.value))}
                    value={number}
                    defaultValue={defaultValue}
                    autoFocus ={isFocus?true:false}
                    placeholder={!isFocus ? placeholder : ""}
                    isfocus={isFocus}
                    onBlur={(e) => onBlur(e)}
                />
            );
        } else if (inputType == "string") {
            return (
                <InputElement
                    {...rest}
                    ref={ref}
                    onChange={(e:any)=>setString(inputLetter(e.target.value))}
                    value={string}
                    defaultValue={defaultValue}
                    autoFocus ={isFocus?true:false}
                    placeholder={!isFocus ? placeholder : ""}
                    isfocus={isFocus}
                    onBlur={(e) => onBlur(e)}
                />
            );
        }}


    return(
        <>
            <InputWrapper
                onFocus={() => setIsFocus(true)}
                onBlur={(e) => onBlur(e)}
                style={style}
            >
                {isFocus &&
                    <Label  htmlFor={id} isfocus={isFocus}>{label} </Label>
                }
                {inputType ? (
                    inputMaskType()
                ) : (
                <InputElement
                    {...rest}
                    ref={ref}
                    defaultValue={defaultValue}
                    autoFocus ={isFocus?true:false}
                    placeholder={!isFocus ? placeholder : ""}
                    isfocus={isFocus}
                    onBlur={(e) => onBlur(e)}
                />)
                }
            </InputWrapper>
        </>
    );
}
export default  SimpleInput;
