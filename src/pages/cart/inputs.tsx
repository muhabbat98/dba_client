import React, { FC } from 'react';
import { InputTypes } from './input-types';

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
   inputType: 'date' | 'card' | 'phone';
   label?: string;
   name: string;
}

let renderCount = 0;

const Inputs: FC<InputsProps> = ({ inputType, label, name, ...rest }) => {
   renderCount++;
   console.log("renderCount = ", renderCount);
   console.log("rest = ", rest);

   switch (inputType) {
      case InputTypes.DATE:
         return (
            <>
               <label>{}</label>
               <input
                  placeholder="date"
                  type="date"
                  name={name}
                  {...rest}
               />
               {console.log(inputType)}
            </>
         );
      default:
         return (
            <input
            placeholder="jjikkl"
            type="text"
            name={name}
            {...rest}
            />
         )
   }
}

export default Inputs;