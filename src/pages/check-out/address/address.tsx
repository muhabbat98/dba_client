import React, { FC, useState, useEffect } from 'react';
import AddressBox from '../../../components/address-box';
import {useSelector, axios, useError } from '../../../hooks'
import {
  Address,
  CallHeader,
  HeaderAddress,
  PackmenHeader,
  MailHeader,
  PackmenBody,
  MailBody,
  CallBody,
  SampleAdress,
  AddressList,
  AddressButton,
} from './style';

interface AdressItemProps {
  nextStep: any;
  dataShare: any;
}

const AdressItem: FC<AdressItemProps> = ({ nextStep, dataShare }) => {
  enum Tabs {
    PACKMEN,
    CALL,
    MAIL,
  }

  const user:any = useSelector(state=>state.user)

  const [type, setType] = useState(Tabs.PACKMEN);
  // const [state, setState] = useState(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading]=useState<boolean>(true);
  const {checkError} = useError()



  const getLocation = (id:any)=>{
    
    dataShare.setData({ ...dataShare.allData, address:{id} });
    nextStep.setStep({ ...nextStep.step, payment: 1 });
    nextStep.setTab('payment');
  }
  // const sendData = (data: any) => {
   
  //   if (data) {
  //     dataShare.setData({ ...dataShare.allData, address: data });
  //     nextStep.setStep({ ...nextStep.step, payment: 1 });
  //     nextStep.setTab('payment');
  //   }
  // };

  
  useEffect(()=>{
    (async()=>{
      
      try{
        
        const response = await axios.get('/user/location/'+user.id);
        setLoading(false)
        
        if(response.data){
          setData(response.data);
        }
        setLoading(false);
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
          onClick={() => setType(Tabs.PACKMEN)}
        >
          Курьером
        </PackmenHeader>
        <CallHeader
          isactive={type === 1 ? true : false}
          onClick={() => setType(Tabs.CALL)}
        >
          Самовывоз
        </CallHeader>
        <MailHeader
          isactive={type === 2 ? true : false}
          onClick={() => setType(Tabs.MAIL)}
        >
          Почтой
        </MailHeader>
      </HeaderAddress>
      {type === 0 ? (
        <PackmenBody>
          <AddressList>

            {
                  
              data&&data.map((elem:any, i:number)=>  <SampleAdress onClick={()=>getLocation(elem.id)} key ={i}>
                  {elem.city+","+elem.district+","+elem.street+","+elem.apartmentNumber} <br /> {elem.postcode}
                </SampleAdress>)        
            }

            {/* <AddressButton onClick={() => setState(true)}>
              + Указать адрес
            </AddressButton> */}
            {/* {state && (
              <AddressBox
                closeModal={setState}
                modalTitle="Указать адрес"
                getItems={(data: any) => sendData(data)}
              />
            )} */}
          </AddressList>
        </PackmenBody>
      ) : type === 1 ? (
        <CallBody>работа в прогрессии</CallBody>
      ) : (
        <MailBody>работа в прогрессии</MailBody>
      )}
    </Address>
  );
};
export default AdressItem;
