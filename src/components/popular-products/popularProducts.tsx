import React from 'react';
import Container from '../grid/container'
import ProductsTitle from '../products-title'
import Button from '../button';
import Shoe from './shoe.svg'
import Dishes from './dishes.svg'
import CardBanner from '../card-banner';
import {Titles,CardBannersWrapper} from './style';

interface PopularProducts{
    leftTitle:string,
    rightTitle?:string,
    cardTitile1:string,
    cardTitile2:string,
    buttonTitle:string,
    cardColor1:string,
    cardColor2:string,
    cardimage1:any,
    cardimage2:any
}
export default function PopularProducts(props:PopularProducts){
    return(
        <Container>
            <Titles>
                <ProductsTitle title={props.leftTitle}/> 
                <ProductsTitle title={props.rightTitle}/> 
            </Titles>
           
            
            <CardBannersWrapper>
                <CardBanner 
                    title={props.cardTitile1} 
                    buttonName={props.buttonTitle}
                    color={props.cardColor1}
                    image={props.cardimage1}
                    />
                <CardBanner 
                    title={props.cardTitile2} 
                    buttonName={props.buttonTitle}
                    color={props.cardColor2}
                    image={props.cardimage2}
                    />
            </CardBannersWrapper>
            
        </Container>
    );
}