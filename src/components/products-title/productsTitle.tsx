import React from 'react';
import {Title} from './style'

interface Title{
    title?:string,
    style?: any
}
const ProductsTitle:React.FC<Title> = ({title, style}) =>{
    return(
        <Title style={style}>{title}</Title>
    );
}
export default ProductsTitle;