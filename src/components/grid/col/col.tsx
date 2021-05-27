import React from 'react'
import { ColContainer } from './style';

interface ColBreakpoints {
   xl?: number; // > 1200px dan katta
   lg?: number; // > 992px && < 1200px
   md?: number; // > 768px && < 992px
   sm?: number; // > 576px && < 768px
   xs?: number; // < 576px dan kichik
}

const Col: React.FC<ColBreakpoints> = ({ xl, lg, md, sm, xs, children }) => {
   return (
      <ColContainer size={{xl, lg, md, sm, xs}}>
         {children}
      </ColContainer>
   )
}

Col.defaultProps = {
   xl: 12,
   lg: 12,
   md: 12,
   sm: 12,
   xs: 12
}
export default Col;
