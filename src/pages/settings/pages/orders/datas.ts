import Phone from '../../../../assets/images/cart-image1.png';
import Charger from '../../../../assets/images/charger.svg'
import Keyboard from '../../../../assets/images/card-item2.png'
import Sneakers  from '../../../../assets/images/card-item8.png'

export const history = [
  {
    idOrder:111122,
    totalPrice: 231125000,
    status:"canceled",
    seller:'ООО /"ДИХАУС/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Phone,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Charger,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
  {
    idOrder:123456,
    totalPrice: 115125000,
    status:"canceled",
    seller:'ООО /ЧП РАХИМ/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Keyboard,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Charger,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
  {
    idOrder:654321,
    totalPrice: 115125000,
    status:"completed",
    seller:'ООО /ЧП РАХИМ/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Phone,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Sneakers,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
  {
    idOrder:13214324,
    totalPrice: 115125000,
    status:"canceled",
    seller:'ООО /ЧП РАХИМ/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Keyboard,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Sneakers,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
]

export const activeData = [
  {
    idOrder:122233,
    totalPrice: 231125000,
    status:"packing",
    seller:'ООО /"ДИХАУС/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Phone,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Charger,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
  {
    idOrder:13214324,
    totalPrice: 115125000,
    status:"onRoad",
    seller:'ООО /ЧП РАХИМ/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Keyboard,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Sneakers,
        itemPrice: 694000,
        count: 1
      }
    ]
  },
  {
    idOrder:1321433,
    totalPrice: 115125000,
    status:"delivered",
    seller:'ООО /ЧП РАХИМ/"',
    orderData:"7 апреля 9:45",
    cash:2798000,
    address: "Бунёдкор",
    recipient:"Тимур Миралиев",
    deliveryData:"9 апреля 9:45",
    costDelivery:50000,
    order:[
      {
        itemTitle:"Смартфон Xiaomi Redmi 9 4/64GB (NFC), зеленый",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Sneakers,
        itemPrice:1694000,
        count:4
      },
      {
        itemTitle:"JBL / Портативная акустическая система Charge 4",
        itemSeller:'ООО /"ДИХАУС/"',
        itemImg:Charger,
        itemPrice: 694000,
        count: 1
      }
    ]
  }
    
]