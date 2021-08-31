import { useState, FC, useEffect } from 'react';
import {
  Address,
  CallHeader,
  HeaderAddress,
  MailHeader,
  PackmenHeader,
  PackmenBody,
  AddressButton,
  AddressList,
  SampleAdress,
} from '../address/style';

import Uzcard from '../../../assets/images/uzcard-small.png';

import Humo from '../../../assets/images/humocard-small.png';
import {useSelector, axios, useError } from '../../../hooks'
import {
  CardData,
  CardImage,
  CardMoney,
  MainCardData,
  SampleCard,
  NameCard,
  NumberCard,
} from './style';

interface PaymentProps {
  dataShare: any;
}

const Payment: FC<PaymentProps> = ({ dataShare }) => {
  enum Tabs {
    POCKET,
    CARD,
    NUMBER,
  }
  const [type, setType] = useState(Tabs.POCKET);
  const [data, setData] =useState<any>()
  const [loading, setLoading] = useState(true)
  const {checkError} =useError()

  const getCard = (id:any)=>{      
      dataShare.setData({ ...dataShare.allData, payment:{id} });
  }

  useEffect(()=>{
    (async()=>{
      
      try{
        
        const response = await axios.get('/user/cards');
        setLoading(false)
        
        if(response.data){
          setData(response.data);
        }
     
      }
      catch(err){
        checkError(err)
        setLoading(false);
      }
    })()
  },[])
  return (
    <Address>
      <HeaderAddress>
        <PackmenHeader
          isactive={type === 0 ? true : false}
          onClick={() => setType(Tabs.POCKET)}
        >
          Эл.кошелёк
        </PackmenHeader>
        <CallHeader
          isactive={type === 1 ? true : false}
          onClick={() => setType(Tabs.CARD)}
        >
          Картой
        </CallHeader>
        <MailHeader
          isactive={type === 2 ? true : false}
          onClick={() => setType(Tabs.NUMBER)}
        >
          Счет в банке
        </MailHeader>
      </HeaderAddress>
      {type === 0 ? (
        <>работа в прогрессии</>
      ) : type === 1 ? (
        <PackmenBody>
          <AddressList>
            {
                  
              data&&data.map((elem:any, i:number)=> <SampleAdress onClick= {()=>getCard(elem.id)} key={i} as={SampleCard}>
                  <CardImage src={Uzcard} />
                    <CardData>
                      <MainCardData>
                        <NameCard>{elem.cardName}</NameCard>
                        <NumberCard>{elem.cardNumber}</NumberCard>
                      </MainCardData>
                      <CardMoney>{elem.expirationMonth +'/'+elem.expirationYear} </CardMoney>
                    </CardData>
                </SampleAdress> )        
              }
            {/*     
            <SampleAdress as={SampleCard}>
              <CardImage src={Humo} />
              <CardData>
                <MainCardData>
                  <NameCard>AAB Humo</NameCard>
                  <NumberCard>Humo **** 6600</NumberCard>
                </MainCardData>
                <CardMoney>125 300 </CardMoney>
              </CardData>
            </SampleAdress> */}
     


            <AddressButton>+ Добавить карту</AddressButton>
          </AddressList>
        </PackmenBody>
      ) : (
        <>работа в прогрессии</>
      )}
    </Address>
  );
};
export default Payment;
