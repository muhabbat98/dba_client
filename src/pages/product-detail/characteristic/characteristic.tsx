import React,{useState} from 'react'
import ProductTitle from '../../../components/products-title';
import Input from '../../../components/input';
import { useForm } from "react-hook-form";
import {
    WrapperContainer,
    CharacterContainer,
    CharacterText,
    Dots,
    SizeText,
    HandeleOpen
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
    const [inp,setInp] = useState<any>('');
    
    const {control} = useForm();
    const handleChange = (e:any) =>{
        console.log('uu--->',e.target.value)
    }
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
            {characters && <>
                <ProductTitle title="Экран"/>
            <WrapperContainer>
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
            </WrapperContainer>
            <ProductTitle title="Связь"/>
            <WrapperContainer>
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
            </WrapperContainer>
            </>}
            <HandeleOpen onClick={()=>setCharacters(open=>!open)}>{characters?"Свернуть характеристики":"Развернуть характеристики"}</HandeleOpen>
            <Input control={control} label="Number" inputType="brithDay" onChange={(e)=>handleChange(e)} defaultValue={inp}/> 
        </div>
    )
}

export default Characteristic;
