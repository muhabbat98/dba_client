import React from 'react';
import Container from '../grid/container';
import {ReactComponent as PlayMarket} from '../../assets/icons/googlePlay-dark.svg';
import {ReactComponent as AppStore} from '../../assets/icons/appStore-dark.svg';
import {WrapperApp,Brand,AppMarkets} from './style';
import Phone from './iPhone11.svg';

const  ReklamaMobileApp = () =>{
    return (
        <Container>
            <WrapperApp>
                <Brand>Marketplace</Brand>
                <p>Совершайте свои покупки с помошью удобного мобильного приложения</p>
                <AppMarkets>
                    <PlayMarket/><AppStore/>
                </AppMarkets>
                <img src={Phone}/>
            </WrapperApp>
            
        </Container>
    )
}

export default ReklamaMobileApp
