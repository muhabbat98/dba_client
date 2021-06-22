import React, { FC, useState } from 'react';
import { InputTypes } from './input-types';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';


interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
   inputType: 'date' | 'card' | 'phone';
   label?: string;
   register?: any;
   control?: any;
   defaultValues?:any;
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
   defaultValues?: any,
   onSubmit: (data: any) => any;
}


export const Form: FC<FormProps> = ({ defaultValues, children, onSubmit }) => {
   const { handleSubmit, register, control } = useForm({ defaultValues });

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
                        key: child.props.name
                     }
                  })
                  : child;
            })
            : children}
      </form>
   );
}

export const Inputs: FC<InputsProps> = ({ inputType, register, control, name, defaultValues, ...rest }) => {
   const [state, setstate] = useState({});

   // const handleChange = (ev: any) => {
   //    console.log(ev.target.value);
   //    setstate({
   //       ...state,
   //       [ev.target.name]: ev.target.value
   //    })
   // }

   switch (inputType) {
      case InputTypes.DATE:
         return (
            <>
               <label>{}</label>
               <input
                  // onChange={(ev) => handleChange(ev)}
                  placeholder="date"
                  type="date"
                  name={name}
                  {...rest}
                  ref={register({ required: true })}
               />
               {console.log("inputType = ", inputType)
               }
            </>
         );

      case InputTypes.CARD:
         console.log()
         return (
            // <Controller
            //    as={() => <InputMask mask="9999 9999 9999 9999"  {...register('card', { required: true })} {...rest} />}
            //    control={control}
            //    // {...{required:true}}

            //    name={name as string}

            // />

            <Controller
               as={InputMask}
               control={control}
               mask="9999 9999 9999 9999"
               name="card"
               defaultValue={defaultValues}
               {...register('card', { required: true })}
            />


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



// const Inputs: FC<InputsProps> = ({ inputType, label, name, ...rest }) => {
//    renderCount++;
//    console.log("renderCount = ", renderCount);
//    console.log("rest = ", rest);

//    switch (inputType) {
//       case InputTypes.DATE:
//          return (
//             <>
//                <label>{}</label>
//                <input
//                   placeholder="date"
//                   type="date"
//                   name={name}
//                   {...rest}
//                />
//                {console.log(inputType)}
//             </>
//          );
//       default:
//          return (
//             <input
//             placeholder="jjikkl"
//             type="text"
//             name={name}
//             {...rest}
//             />
//          )
//    }
// }

// export default Inputs;


// export function Form({ defaultValues, children, onSubmit }) {
//    const { handleSubmit, register } = useForm({ defaultValues });

//    return (
//      <form onSubmit={handleSubmit(onSubmit)}>
//        {Array.isArray(children)
//          ? children.map(child => {
//              return child.props.name
//                ? React.createElement(child.type, {
//                    ...{
//                      ...child.props,
//                      register,
//                      key: child.props.name
//                    }
//                  })
//                : child;
//            })
//          : children}
//      </form>
//    );
//  }

