import React,{useState} from 'react'
import ProductTitle from '../../../components/products-title';
import {
    WrapperContainer,
    CharacterContainer,
    CharacterText,
    Dots,
    SizeText,
    HandeleOpen, MobileContainer
} from './style';
import { useWindowSize } from '../../../hooks/useWindowSize';
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
const display = [
    {character:"Тип дисплея/экранаолщина предмета",size:"Super AMOLED"},
    {character:"Диагональ экрана",size:"6.5"},
    {character:"Разрешение экрана",size:"2400x1080"},
]
const network = [
    {character:"Количество SIM карт",size:"2"},
    {character:"Стандарт связи",size:"4G"},
    {character:"Беспроводные интерфейсы",size:"NFC; Bluetooth 5.0; Wi-Fi 802.11ax"},
    {character:"Спутниковая навигация",size:"ГЛОНАСС; GPS; BeiDou; Galileo;QZSS"},
]
const Characteristic = () => {
    const [characters,setCharacters] = useState<boolean>(false)
    const [width,height] = useWindowSize();
    return (
        <div>
            <ProductTitle title="Характеристика"/>
            <WrapperContainer>
                {width>768 ?
                    <>
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

                    </> :
                    <>
                        {charchters.map((item:any,index:number)=>(
                                <MobileContainer key={index}>
                                    <CharacterText>{item.character}</CharacterText>
                                    <SizeText key={index}>{item.size}</SizeText>
                                </MobileContainer>
                            ))}
                    </>}
            </WrapperContainer>
            {characters && <>
                <ProductTitle title="Экран"/>
            <WrapperContainer>
                {width>768 ?
                    <>
                        <div>
                            {display.map((item,index)=>(
                                <CharacterContainer key={index} style={{display:"flex"}}>
                                    <CharacterText>{item.character}</CharacterText>
                                    <Dots></Dots>
                                </CharacterContainer>
                            ))}
                        </div>
                        <div>
                            {display.map((item,index)=>(
                                <SizeText key={index}>{item.size}</SizeText>
                            ))
                            }
                        </div>
                    </>:
                    <>
                        {display.map((item:any,index:number)=>(
                            <MobileContainer key={index}>
                                <CharacterText>{item.character}</CharacterText>
                                <SizeText key={index}>{item.size}</SizeText>
                            </MobileContainer>
                        ))}
                    </>}

            </WrapperContainer>
            <ProductTitle title="Связь"/>
            <WrapperContainer>
                {width>768 ?
                    <>
                        <div>
                            {network.map((item,index)=>(
                                <CharacterContainer key={index} style={{display:"flex"}}>
                                    <CharacterText>{item.character}</CharacterText>
                                    <Dots></Dots>
                                </CharacterContainer>
                            ))}
                        </div>
                        <div>
                            {network.map((item,index)=>(
                                <SizeText key={index}>{item.size}</SizeText>
                            ))
                            }
                        </div>
                    </>:
                    <>
                        {network.map((item:any,index:number)=>(
                            <MobileContainer key={index}>
                                <CharacterText>{item.character}</CharacterText>
                                <SizeText key={index}>{item.size}</SizeText>
                            </MobileContainer>
                        ))}
                    </>}

            </WrapperContainer>
            </>}
            <HandeleOpen onClick={()=>setCharacters(open=>!open)}>{characters?"Свернуть характеристики":"Развернуть характеристики"}</HandeleOpen>
            
        </div>
    )
}

export default Characteristic;
