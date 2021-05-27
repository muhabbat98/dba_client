import React,{useState} from "react";
import Button from "../../../../../../../components/button";
import formatMoney from "../../../../../../../utils/format-money";
import {ReactComponent as BoxGray} from '../../../../../../../assets/icons/box-gray.svg'
import {ReactComponent as BoxBlue} from '../../../../../../../assets/icons/box-blue.svg'
import {ReactComponent as CarGray} from '../../../../../../../assets/icons/car-gray.svg'
import {ReactComponent as CarBlue} from '../../../../../../../assets/icons/car-blue.svg'
import {ReactComponent as SuccessGray} from '../../../../../../../assets/icons/success-gray.svg'
import {ReactComponent as SuccessBlue} from '../../../../../../../assets/icons/success-blue.svg'
import {ReactComponent as DownArrow} from '../../../../../../../assets/icons/down-arrow2.svg'
import {
  ActiveProductsItemContainer,
  InfoWrapper,
  OrderHeader,
  InfoTitle,
  ImageContainer,
  TitlesContainer,
  PriceContainer,
  TextWrapper,
  InfoDeliveryContainer,
  SubContainer,
  ButtonsGroupContainier
} from "./style";

interface ActivePagePropses {
  activeData: any;
}
const ActiveProductsItem: React.FC<ActivePagePropses> = ({ activeData }) => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(
    {
      state1:true,
      state2:activeData.status=="onRoad"||activeData.status=="delivered"?true:false,
      state3:activeData.status=="delivered"?true:false,
    }
  );
  return (
    <ActiveProductsItemContainer>
      <InfoWrapper>
        <OrderHeader>
          <InfoTitle>Заказ № {activeData.idOrder}</InfoTitle>
          <div>Доставлен</div>
        </OrderHeader>
        <div style={{display:"flex",justifyContent:'space-between'}}>
          <SubContainer>
            <div>
              {status.state1?<BoxBlue/>:<BoxGray/>}
              <InfoTitle style={{color:status.state1?"":"rgba(0, 0, 0, 0.5)"}}>Упаковываем</InfoTitle>
              <span style={{background:!status.state2?"#000":""}}></span>
            </div>
            <p>Заказ готовится к отправке</p>
          </SubContainer>
          <SubContainer>
            <div>
              {status.state2?<CarBlue/>:<CarGray/>}
              <InfoTitle style={{color:status.state2?"":"rgba(0, 0, 0, 0.5)"}}>В пути</InfoTitle>
              <span style={{background:!status.state3?"#000":""}}></span>
            </div>
            <p>Ваш заказ находится в пути</p>
          </SubContainer>
          <SubContainer>
          <div>
              {status.state3?<SuccessBlue/>:<SuccessGray/>}
              <InfoTitle style={{color:status.state3?"":"rgba(0, 0, 0, 0.5)"}}>Доставлен</InfoTitle>
              
            </div>
            <p>Заказ выполнен</p>
          </SubContainer>
        </div>
        {activeData.order.map((item: any, index: number) => {
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
                    <InfoTitle>{item.itemTitle}</InfoTitle>
                    <p>Продавец: {item.itemSeller}</p>
                  </TitlesContainer>
                </div>
                <PriceContainer>
                  <InfoTitle>
                    {formatMoney(item.itemPrice)}
                    <span style={{ marginLeft: 5, fontWeight: "normal" }}>
                      сум
                    </span>
                  </InfoTitle>
                  <p>{item.count} шт</p>
                </PriceContainer>
              </div>
            </div>
          );
        })}
        { open && 
          <>
            <InfoTitle>Информация о заказе</InfoTitle>
            <TextWrapper>
              <p>Дата оформления заказа:</p>
              <p>{activeData.orderData}</p>
            </TextWrapper>
            <InfoTitle>Способ оплаты</InfoTitle>
            <TextWrapper>
              <p>Наличными при получении </p>
              <p style={{ fontSize: 16, fontWeight: "bold" }}>
                {formatMoney(activeData.cash)}
                <span style={{ fontSize: 14, fontWeight: "normal", marginLeft: 5 }}>
                  сум
                </span>
              </p>
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
                <p>{activeData.address}</p>
                <p>{activeData.recipient}</p>
                <p>{activeData.deliveryData}</p>
                <p>
                  {formatMoney(activeData.costDelivery)}
                  <span style={{ marginLeft: 5 }}>сум</span>
                </p>
              </div>
            </InfoDeliveryContainer>
          </>}
        
        <ButtonsGroupContainier >
          <div onClick={()=>setOpen(open=>!open)}>
            <span>{open?"Скрыть":"Подробнее"}</span><DownArrow style={{transform:open?"rotate(180deg)":"",}}/>
          </div>
          <Button style={{maxWidth:240}} btnType="outlined">Начать спор</Button>
        </ButtonsGroupContainier>
      </InfoWrapper>
    </ActiveProductsItemContainer>
  );
};

export default ActiveProductsItem;
