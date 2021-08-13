import React from 'react';
import {Title} from './style'

interface Title{
    title?:string,
    style?: any;
    fSize?:any;
}
const ProductsTitle:React.FC<Title> = ({title, style,fSize}) =>{
    return(
        <Title style={style} fSize={fSize}>{title}</Title>
    );
}
export default ProductsTitle;
