
import React,{useState} from 'react';
import DefaultOrderPage from './order-pages/default-order-page';
import MainOrderPage from './order-pages/main-order-page';
import {history,activeData} from "./datas"



const OrdersForSeller = () => {
const [openOrder, setOpenOrder] = useState((history||activeData)?true:false);

  return (
    <div>
      {
        openOrder ?<MainOrderPage history={history} activeData={activeData} />: <DefaultOrderPage setOpen={setOpenOrder}/>
      }
      
    </div>
  );
};

export default OrdersForSeller;
