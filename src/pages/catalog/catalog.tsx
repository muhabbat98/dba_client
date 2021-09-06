import React,{useEffect, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';

import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import Card from '../../components/card';
import CatalogLeftMmenu from './catalog-left-menu';

import {
   CatalogContainer, SidebarCategoryBox, MainCatalog, MainCatalogImage, MainCatalogLink, MainCatalogTitle,
   CatalogSimilarProducts, AdvertiseCatalog, SwiperContainer, CatalogLeftMmenuUl
} from './style';

import Catalog1 from '../../assets/images/catalog1.png';
import Catalog2 from '../../assets/images/catalog2.png';
import Catalog3 from '../../assets/images/catalog3.png';
import Catalog4 from '../../assets/images/catalog4.png';
import Catalog5 from '../../assets/images/catalog5.png';
import Catalog6 from '../../assets/images/catalog6.png';
import Catalog7 from '../../assets/images/catalog7.png';
import Catalog8 from '../../assets/images/catalog8.png';
import Advertise from '../../assets/images/advertise1.png'; 

import { axios, useError } from '../../hooks'
import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';

import catalogData from './data.json';

// export const data = [
//    {
//       "id": "6063033fb1a9f83cc5c61050",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Умные часы Samsung Galaxy Watch Active2...",
//       "images": [
//          CardImage
//       ],
//       "priceResponse": {
//          "value": "9148000",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "6063033fb1a9f83cc5c123120",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Adidas / Мяч TEAM TrainingPr.",
//       "images": [
//          CardImage2
//       ],
//       "priceResponse": {
//          "value": "206049",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "6063033fb1a9f83cc523423",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Apple / Медиаплеер Apple TV 32GB...",
//       "images": [
//          CardImage3
//       ],
//       "priceResponse": {
//          "value": "1 849 000",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },

//    {
//       "id": "606dfsd83cc52sd3423",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Adidas / Кроссовки D Rose 773 2020...",
//       "images": [
//          CardImage4
//       ],
//       "priceResponse": {
//          "value": "629 000",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "60dfgreteewwsd3423",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "PUMA / Сникеры Puma Backcourt Mid",
//       "images": [
//          CardImage5
//       ],
//       "priceResponse": {
//          "value": "682 900",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "60dfgretee36343643",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Apple / Смартфон iPhone 12 Pro 128GB",
//       "images": [
//          CardImage6
//       ],
//       "priceResponse": {
//          "value": "12 798 000",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "60dfgretee3634453643",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Apple / Наушники AirPods Pro с беспроводным...",
//       "images": [
//          CardImage7
//       ],
//       "priceResponse": {
//          "value": "2 572 000 ",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    },
//    {
//       "id": "60dfgretee3avcc3443",
//       "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
//       "name": "Sweet Baby / Прогулочная коляска... ",
//       "images": [
//          CardImage8
//       ],
//       "priceResponse": {
//          "value": "2 085 000 ",
//          "currency": {
//             "id": "605b73ecd3f290742ec3f957",
//             "name": "Uzbekistan Sum",
//             "shortName": "сум",
//             "code": 860,
//             "format": 2
//          }
//       }
//    }
// ]

SwiperCore.use([Navigation]);

const Catalog = () => {
   const {checkError} = useError()
   const [loading, setLoading] = useState(true)
   const [carddata, setData] = useState<any>([])
 
   useEffect(()=>{
     (async()=>{
       try{
         const response = await axios.get("product/getAllProducts")
         setData(response.data)
         setLoading(false)
       }
       catch(err){
         checkError(err)
       }
     })()
   },[])
   console.log("card data ",carddata)
   return (
      <CatalogContainer>
         <Container>
            <ProductsTitle title="Электроника" />
            <Row>
               <Col xl={3}>
                  <SidebarCategoryBox>
                     <CatalogLeftMmenuUl>
                        {
                           catalogData.subCategories.map(item => <CatalogLeftMmenu items={item} />)
                        }
                     </CatalogLeftMmenuUl>
                  </SidebarCategoryBox>
               </Col>
               <Col xl={9}>
                  <AdvertiseCatalog>
                     <SwiperContainer>
                        <Swiper
                           spaceBetween={50}
                           slidesPerView={1}
                           navigation
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        >
                           <SwiperSlide>
                              <img src={Advertise} />
                           </SwiperSlide>
                           <SwiperSlide>
                              <img src={Advertise} />
                           </SwiperSlide>
                           <SwiperSlide>
                              <img src={Advertise} />
                           </SwiperSlide>
                        </Swiper>
                     </SwiperContainer>
                  </AdvertiseCatalog>
                  <MainCatalog>
                     <Row>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog1})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Телевизори</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog2})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Смартфоны</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog3})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Беспроводные наушники</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog4})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Умные часы и браслеты</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog5})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Игровые приставки</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog6})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Фотокамери</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog7})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Планшеты</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                        <Col xl={3}>
                           <MainCatalogImage style={{ backgroundImage: `url(${Catalog8})` }}>
                              <MainCatalogLink to="">
                                 <MainCatalogTitle>Умний дом</MainCatalogTitle>
                              </MainCatalogLink>
                           </MainCatalogImage>
                        </Col>
                     </Row>
                  </MainCatalog>
                  <CatalogSimilarProducts>
                     <ProductsTitle title="Популярные товары" />
                     <Row>
                        {
                           carddata.map((i: any) => {
                              return (
                                 <Col xl={4}>
                                    <Card item={i} />
                                 </Col>
                              )
                           })
                        }
                     </Row>
                  </CatalogSimilarProducts>
               </Col>
            </Row>
         </Container>
      </CatalogContainer>
   )
}

export default Catalog