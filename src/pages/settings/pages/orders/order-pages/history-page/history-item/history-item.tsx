import React,{useState} from 'react'
import formatMoney from '../../../../../../../utils/format-money'; 
import Button from '../../../../../../../components/button'; 
import {ReactComponent as ArrowIcon} from '../../../../../../../assets/icons/arrow-down.svg'
import {
    Tr,
    InfoWrapper,
    InfoTitle,
    ImageContainer,
    TitlesContainer,
    PriceContainer,
    TextWrapper,
    InfoDeliveryContainer
} from "./style"

interface Propses{
    item:any;
}

const  HistoryItem:React.FC<Propses> = ({item}) => {
    const styleStatus = {
        background:item.status=="completed"?"#DEF4EA":"#FFE3E3",
        color:item.status=="completed"?"green":"red",
    }
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tr open={open}>
                <div> №{item.idOrder} </div>
                <div> {formatMoney(item.totalPrice)}сум </div>
                <div> <span style={styleStatus}>{item.status=="completed"?"Доставлен":"Отменён"} </span> </div>
                <div> {item.seller} </div>
                <div> 
                    <span 
                    style={{background:open?"#EAEDF5":"",}} 
                    onClick={()=>setOpen(!open)}>
                        <ArrowIcon 
                        style={
                            {transform:open?"rotate(180deg)":"",
                            marginTop:open?-2:2}}/>
                        </span> 
                </div>
            </Tr> 
            {open &&
                <InfoWrapper>
                    <InfoTitle>Товары</InfoTitle>
                    {item.order.map((item:any,index:number)=>{
                        return(
                            <div key={index} >
                                <div style={{display:'flex',justifyContent:"space-between"}}>
                                    <div style={{display:'flex'}}>
                                        <ImageContainer>
                                            <div>
                                                <img src={item.itemImg}/>
                                            </div>
                                        </ImageContainer>
                                        <TitlesContainer>
                                            <InfoTitle>{item.itemTitle}</InfoTitle>
                                            <p>Продавец: {item.itemSeller}</p>
                                        </TitlesContainer>
                                    </div>
                                    <PriceContainer>
                                        <InfoTitle>{formatMoney(item.itemPrice)}<span style={{marginLeft:5,fontWeight:'normal'}}>сум</span></InfoTitle> 
                                        <p>{item.count} шт</p>
                                    </PriceContainer>
                                </div>
                                
                            </div>
                        )
                    })}
                    <InfoTitle>Информация о заказе</InfoTitle>
                    <TextWrapper>
                        <p>Дата оформления заказа:</p>
                        <p>{item.orderData}</p>
                    </TextWrapper>
                    <InfoTitle>Способ оплаты</InfoTitle>
                    <TextWrapper>
                        <p>Наличными при  получении </p>
                        <p style={{fontSize:16,fontWeight:'bold'}}>
                            {formatMoney(item.cash)}
                            <span style={{fontSize:14, fontWeight:'normal',marginLeft:5}}>сум</span></p>
                    </TextWrapper>
                    <InfoTitle>Способ получения</InfoTitle>
                    <InfoDeliveryContainer>
                        <div>
                            <p>Адрес доставки:</p>
                            <p>Получатель:</p>
                            <p>Дата доставки:</p>
                            <p>Стоимость доставки:</p>
                        </div>
                        <div>
                            <p>{item.address}</p>
                            <p>{item.recipient}</p>
                            <p>{item.deliveryData}</p>
                            <p>{formatMoney(item.costDelivery)}<span style={{marginLeft:5}}>сум</span></p>
                        </div>
                        
                    </InfoDeliveryContainer>
                    <div style={{display:"flex",justifyContent:"center",}}>
                        <Button btnType="outlined">Начать спор</Button>
                    </div>
                </InfoWrapper> 
            }
            
        </>
    )
}

export default HistoryItem;
