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
import {  Route, Switch, useParams, useRouteMatch, useHistory } from 'react-router';
import { indexOf } from 'lodash';
import { Link } from 'react-router-dom';


SwiperCore.use([Navigation]);

const Catalog = () => {
   const {checkError} = useError()
   const [loading, setLoading] = useState(true)
   const [carddata, setData] = useState<any>([])
   const [category, setCategory] = useState<any>([])
   const [compile, setCompile] = useState(false)

   type CategoryId  = {
      id:string
   }

   const { id } = useParams<CategoryId>()

   const history = useHistory()

   useEffect(()=>{
      product()
      catalog()
    },[])
   
   const catalog = async()=>{
      try{
         const res = await axios.get("catalog?parentId="+ (id ? id : ""))
         setCategory(res.data)
         if(res.data.length === 0){
            history.replace(`/products/${id}`)
        }
         setLoading(false)
      }
      catch(err){
        checkError(err)
      }
   }

   const product = async()=>{
      try{
        const response = await axios.get("product/getAllProducts")
        setData(response.data)
        setLoading(false)
      }
      catch(err){
        checkError(err)
      }
   }
console.log(category)
   return (
      <CatalogContainer>
         <Container>
            <ProductsTitle title="Электроника" />
            <Row>
               <Col xl={3}>
                  <SidebarCategoryBox>
                     <CatalogLeftMmenuUl>
                        {/* {
                           catalogData.subCategories.map(item => <CatalogLeftMmenu items={item} />)
                        } */}
                        {category.map((item:any, i:number)=><CatalogLeftMmenu items={item} />)}
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
                     {
                           category.map((one:any, i:number)=>{
                              return (
                                 <Col xl={3} key={i}>                                    
                                    <MainCatalogImage style={{ backgroundImage: `url(${one.imageUrl})` }}>                                    
                                       <MainCatalogLink to={`${one.id}`}>
                                          <MainCatalogTitle>{one.name}</MainCatalogTitle>
                                       </MainCatalogLink>
                                    </MainCatalogImage>                                    
                                 </Col>
                              )
                           })
                        }
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