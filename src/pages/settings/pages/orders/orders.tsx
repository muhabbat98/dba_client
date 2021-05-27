import React,{useState} from 'react';
import DefaultOrderPage from './order-pages/default-order-page';
import MainOrderPage from './order-pages/main-order-page';
import {history,activeData} from "./datas"



const Orders = () => {
const [openOrder, setOpenOrder] = useState(false);

  return (
    <div>
      {
        openOrder ?<MainOrderPage history={history} activeData={activeData} />: <DefaultOrderPage setOpen={setOpenOrder}/>
      }
      
    </div>
  );
};

export default Orders;
