import React,{useState} from 'react'
import formatMoney from '../../../../../../utils/format-money';
import Button from '../../../../../../components/button';
import { useWindowSize } from '../../../../../../hooks/useWindowSize';
import {ReactComponent as ArrowIcon} from '../../../../../../assets/icons/blueArrow.svg'
import {
    Tr,
    InfoWrapper,
    InfoTitle,
    ImageContainer,
    TitlesContainer,
    PriceContainer,
    TextWrapper,
    InfoDeliveryContainer,
    BoxMobl,
    BoxMoblTitle,
    Line,
    OpenButton,
    MoblProductTitle
} from "./style"

interface Propses{
    item:any;
    setOpen:any,
    setGetDisputeItem:any,
}

const  HistoryItem:React.FC<Propses> = ({item,setOpen,setGetDisputeItem}) => {
    const styleStatus = {
        background:item.status=="completed"?"#DEF4EA":"#FFE3E3",
        color:item.status=="completed"?"green":"red",
        
    }
    const [width,height] = useWindowSize();
    const [open, setOpenn] = useState(false);
    return (
        <>
        {width > 768 ? <>
            <Tr open={open}>
                <div> №{item.idOrder} </div>
                <div> {formatMoney(item.totalPrice)}сум </div>
                <div> <span style={styleStatus}>{item.status=="completed"?"Доставлен":"Отменён"} </span> </div>
                <div> {item.seller} </div>
                <div> 
                    <span 
                        style={{background:open?"#EAEDF5":"",marginRight:20}} 
                        onClick={()=>setOpenn(!open)}>
                        <ArrowIcon 
                            style={
                                {transform:open?"rotate(180deg)":"",transition:"0.3s",
                                marginTop:open?-2:2}}
                        />
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
                        <Button btnType="outlined" onClick={()=>{setOpen(true);setGetDisputeItem(item)}}>Начать спор</Button>
                    </div>
                </InfoWrapper> 
            }
            </>
            //Mobile Visualization------------>
            :<>
                <BoxMobl>
                    <div style={{padding:16}}>
                        <BoxMoblTitle>
                            <p>ID Заказа</p>
                            <p>№{item.idOrder}</p>
                        </BoxMoblTitle>
                        <BoxMoblTitle>
                            <p>Стоимость</p>
                            <p>{formatMoney(item.totalPrice)}сум</p>
                        </BoxMoblTitle>
                        <BoxMoblTitle>
                            <p>Продавец</p>
                            <p>{item.seller}</p>
                        </BoxMoblTitle>
                        <BoxMoblTitle>
                            <p>Статус</p>
                            <span style={styleStatus}>{item.status=="completed"?"Доставлен":"Отменён"} </span>
                        </BoxMoblTitle>
                        <OpenButton onClick={()=>setOpenn(!open)}>
                            <span>{open?"Скрыть":"Подробно"}</span>
                            <ArrowIcon 
                                style={
                                    {transform:open?"rotate(180deg)":"",transition:"0.3s",
                                    marginTop:open?-2:2}}
                            />
                        </OpenButton>
                    </div>
                    
                    {open &&
                    <>
                        <Line></Line>
                        <div style={{padding:16}}>
                            {item.order.map((item: any, index: number) => {
                                return (
                                    <div key={index}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ display: "flex" }}>
                                        <ImageContainer>
                                            <div>
                                            <img src={item.itemImg} />
                                            </div>
                                        </ImageContainer>
                                        <TitlesContainer>
                                            {width<768 &&
                                            <PriceContainer>
                                                <InfoTitle style={{marginTop:0}}>
                                                {formatMoney(item.itemPrice)}
                                                <span style={{ 
                                                        marginLeft: 5, 
                                                        fontWeight: "normal",
                                                        }}>
                                                    сум
                                                </span>
                                                </InfoTitle>
                                                <p style={{margin:width<768 ? 0 :""}}>{item.count} шт</p>
                                            </PriceContainer>
                                            }
                                            <MoblProductTitle >{item.itemTitle}</MoblProductTitle>
                                            <p style={{marginTop:width<768?"3px":""}}>Продавец: {item.itemSeller}</p>
                                        </TitlesContainer>
                                        </div>
                                        {width>768 &&
                                        <PriceContainer>
                                            <InfoTitle>
                                            {formatMoney(item.itemPrice)}
                                            <span style={{ marginLeft: 5, fontWeight: "normal" }}>
                                                сум
                                            </span>
                                            </InfoTitle>
                                            <p>{item.count} шт</p>
                                        </PriceContainer>
                                        }
                                        
                                    </div>
                                    </div>
                                );
                                })}
                            <InfoTitle style={{marginBottom:width<768?6:""}}>Информация о заказе</InfoTitle>
                            <TextWrapper>
                            <p>Дата оформления заказа:</p>
                            <p>{item.orderData}</p>
                            </TextWrapper>
                            <InfoTitle style={{marginBottom:width<768?6:""}}>Способ оплаты</InfoTitle>
                            <TextWrapper>
                            <p>Наличными при получении </p>
                            <p style={{ fontSize: 14, fontWeight: "bold" }}>
                                {formatMoney(item.cash)}
                                <span style={{ fontSize: 14, fontWeight: "normal", marginLeft: 5 }}>
                                сум
                                </span>
                            </p>
                            </TextWrapper>
                            <InfoTitle style={{marginBottom:width<768?6:""}}>Способ получения</InfoTitle>
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
                                <p>
                                {formatMoney(item.costDelivery)}
                                <span style={{ marginLeft: 5 }}>сум</span>
                                </p>
                            </div>
                            </InfoDeliveryContainer>
                        </div>
                        <div 
                            style={{
                                display:"flex",
                                justifyContent:"flex-end",
                                marginBottom:12,
                                marginRight:12}}>
                            <Button 
                                size="small" 
                                btnType="outlined" 
                                onClick={()=>{setOpen(true);setGetDisputeItem(item)}}
                                style={{height:40}}
                                >
                                    Начать спор</Button>
                        </div>
                    </>
                    }
                </BoxMobl>
            </> 
        } 
        </>
    )
}

export default HistoryItem;
