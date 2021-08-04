import React from 'react'
import Container from '../grid/container'
import {Wrapper,BannerTitle} from './style'
const Banner = () => {
    return (
        <Wrapper>
            <Container>
                <BannerTitle><p>Новая коллекйия товаров для летнего актианого отдыха</p></BannerTitle> 
            </Container>
        </Wrapper>
    )
}

export default Banner;