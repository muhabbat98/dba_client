import React from 'react'
import ProductTitle from '../../products-title';
import {
    WrapperContainer,
    CharacterContainer,
    CharacterText,
    Dots,
    SizeText
} from './style'
const charchters =[
    {character:"Толщина предмета",size:"0.74 см"},
    {character:"Разрешение экрана",size:"2532х1170"},
    {character:"Гарантийный срок",size:"1год"},
    {character:"Вид разъема",size:"1xLightning"},
    {character:"Фронтальная камера",size:"12 Мп"},
    {character:"Основная камера",size:"12 Мп"},
    {character:"Ширина предмета",size:"7.15 см"},
    {character:"Беспроводные интерфейсы",size:" NFC; Bluetooth 5.0; Wi-Fi 802.11ax"},
    {character:"Спутниковая навигация",size:"ГЛОНАСС; GPS; BeiDou; Galileo;QZSS"},
]
const Characteristic = () => {
    return (
        <div>
            <ProductTitle title="Характеристика"/>
            <WrapperContainer>
                <div>
                    {charchters.map((item,index)=>(
                        <CharacterContainer key={index} style={{display:"flex"}}>
                            <CharacterText>{item.character}</CharacterText>
                            <Dots></Dots>
                        </CharacterContainer>
                    ))}
                </div>
                <div>
                    {charchters.map((item,index)=>(
                        <SizeText key={index}>{item.size}</SizeText>
                    ))
                    }
                </div>
            </WrapperContainer>
        </div>
    )
}

export default Characteristic;
