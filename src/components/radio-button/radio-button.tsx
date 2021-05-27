import React, { ButtonHTMLAttributes, SyntheticEvent } from 'react';
import { RadioButtonLabel, RadioButtonInput, RadioButtonSpan } from './style';

interface RadioButtonProps {
   name?: string;
   value?: string;
   id?: string;
   label: string;
   disabled?: boolean;
   callback?: (e: SyntheticEvent) => void;
}

// import { SyntheticEvent, useState } from 'react';
// const handleChange = (ev: SyntheticEvent) =>{
//    const target = ev.target as HTMLInputElement;
//    console.log('ssaasa', target.id); 
//  }

{/* <RadioButton name="radio" id="radio1" value="" label="radio1L" callback={handleChange} disabled={false}/><br/>
<RadioButton name="radio" checked={true} id="radio2" value="" label="radio1L" callback={handleChange} disabled={true}/><br/>
<RadioButton name="radio" id="radio3" value="" label="radio1L" callback={handleChange}/><br/>
<RadioButton name="radio" id="radio4" value="" label="radio1L" callback={handleChange}/><br/> */}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, id, label, disabled, callback, ...rest}) => {
   return (
      <RadioButtonLabel htmlFor={id} style={{cursor: disabled ? 'not-allowed' : 'pointer'}}>
         <RadioButtonInput 
            disabled={disabled} 
            value={value} 
            onChange={callback} 
            id={id} 
            type="radio" 
            name={name} 
            {...rest}
            />
         <RadioButtonSpan />{label}
      </RadioButtonLabel>
   )
}


export default RadioButton;