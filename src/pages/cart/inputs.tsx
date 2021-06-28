import React, { FC, useEffect, useState } from 'react';
import { InputTypes } from './input-types';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';


interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
   inputType: 'date' | 'card' | 'phone' | 'reset';
   label?: string;
   register?: any;
   control?: any;
   defaultValues?: any;
   reset?: any;
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
   defaultValues?: any,
   onSubmit: (data: any) => any;
}


export const Form: FC<FormProps> = ({ defaultValues, children, onSubmit }) => {
   const { handleSubmit, register, control, reset } = useForm({ defaultValues });

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         {Array.isArray(children)
            ? children.map((child: any) => {
               return child.props.name
                  ? React.createElement(child.type, {
                     ...{
                        ...child.props,
                        control,
                        register,
                        reset,
                        key: child.props.name
                     }
                  })
                  : child;
            })
            : children}
         <button type="button" onClick={() => reset({ defaultValues })}>Reset</button>
      </form>
   );
}

export const Inputs: FC<InputsProps> = ({ inputType, register, control, name, reset, defaultValues, ...rest }) => {
   const [state, setstate] = useState({
      card:''
   });

   const handleChange = (ev: any) => {
      console.log(ev.target.value);
      setstate({
         ...state,
         [ev.target.name]: ev.target.value
      })
   }


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
                  ref={register({ required: true })}
               />

            </>
         );

      case InputTypes.CARD:
         console.log("REST = ", rest)
         return (
            // <input 
            //    type="text" 
            //    name={name}
            //    // placeholder="Email" 
            //    // {...register(name, {required: true, pattern: /^\S+@\S+$/i})} 
            //    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            // />

            <input
               type="number"
               name={name}
               {...rest}
               {...{required:true}}
               // pattern="\d*" 
               // maxLength={16}
               // minLength={16}

               {...register(name, { required: true, pattern: /^\d{0,16}$/g })}
            />

            // <Controller
            //    as={() => <InputMask mask="9999 9999 9999 9999"  {...register('card', { required: true })} {...rest} />}
            //    control={control}
            //    // {...{required:true}}

            //    name={name as string}

            // />

            // <Controller
            //    as={InputMask}
            //    control={control}
            //    mask="9999 9999 9999 9999"
            //    name="card"
            //    {...rest}
            //    // defaultValue={restdefaultValues}
            //    {...register('card', { required: true })}
            // />
         )

      default:
         return (
            <input
               placeholder="jjikkl"
               type="text"
               name={name}
               {...rest}
               ref={register({ required: true })}
            />
         )
   }
}