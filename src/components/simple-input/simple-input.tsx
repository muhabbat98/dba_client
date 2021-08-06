import React, { useEffect, useState } from 'react';
import {} from './style'
import { InputElement, InputWrapper, Label } from './style';

interface Propses extends React.InputHTMLAttributes<HTMLInputElement> {
    label?:string,
    placeholder?:string,
    style?:any,
    ref?:any
}
const SimpleInput:React.FC<Propses> = ({label,ref,placeholder,style,...rest}) => {
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
    const onBlur = (e: any) => {
        setIsFocus(true);
        const val = e.target.value;
        if (val.length > 0 ) {
            setIsFocus(true);

        } else setIsFocus(false);
    };
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
                <InputElement
                    {...rest}
                    ref={ref}
                    autoFocus ={isFocus?true:false}
                    placeholder={!isFocus ? placeholder : ""}
                    isfocus={isFocus}
                    onBlur={(e) => onBlur(e)}
                />
            </InputWrapper>
        </>
    );
}
export default  SimpleInput;
