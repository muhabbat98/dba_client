import React, { FC } from 'react'
import { PriceInputFilter } from './style';

interface PriceInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const PriceInput: FC<PriceInputProps> = ({ ...rest }) => {
   return (
      <>
         <PriceInputFilter {...rest} />
      </>
   )
}

export default PriceInput