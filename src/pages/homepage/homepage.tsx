// import React from 'react';

// const Homepage = () => {
//   return <div>Homepage</div>;
// };

// export default Homepage;

import {useEffect, useState} from 'react';

import Card from '../../components/card';

import PopularProducts from '../../components/popular-products';
import ContactSection from '../../components/contact-section';
import Container from '../../components/grid/container';
import ProductsTitle from '../../components/products-title';
import Banner from '../../components/banner';
import ReklamaMobileApp from '../../components/reklama-mobile-app';
import Button from '../../components/button';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Cont } from './style';

import Snowboard from '../../assets/images/snowboard.svg';
import Phones from '../../assets/images/phones.svg';

import OrangeBanner from '../../assets/images/orangeBanner.svg';
import Slider from '../../components/slider';
import CardMobile from '../../components/card-mobile';
import Skeleton from '../../components/main-skeleton';
import { axios, useError } from '../../hooks';



const Homepage = () => {
  const [width, height] = useWindowSize();
  const {checkError} = useError()
  const [loading, setLoading] = useState(true)
  const [carddata, setData] = useState<any>([])
  const products = async()=>{
    try{
      const response = await axios.get("product/getAllProducts")
      setData(response.data)
      setLoading(false)
    }
    catch(err){
      checkError(err)
    }
  }
  useEffect(()=>{
    products()
  },[])
 
  return (
    <div>
        {/*Skleton loader */}
        {/*<Skeleton/>*/}
      <Banner />
      {width > 768 ? (
        <Cont>
          <Container>
            <ProductsTitle style={{ marginBottom: '0px' }} title="Новинки" />
            <Slider data={carddata.length<10 ? carddata.reverse():carddata.slice(carddata.length - 10, 11).reverse()} />
          </Container>
        </Cont> 
      ) : null}

      {width > 768 ? (
        <PopularProducts
          leftTitle="Акции"
          rightTitle="Смотреть все"
          cardTitile1="Оформите Плюс и получите 300 баллов для покупок на Маркете"
          cardTitile2="Мобильные телефоны Купить 4 по цена 3"
          buttonTitle="Подробнее"
          cardColor1="#FCF5D2"
          cardColor2="#EBEBEB"
          cardimage1={Snowboard}
          cardimage2={Phones}
        />
      ) : (
        <Container>
          <img width="100%" src={OrangeBanner} />
        </Container>
      )}
      {/* <Container>
        <ProductsTitle title="Ваша подборка для покупок у нас" />
        <CardWrapperRow>
          {
            data.map((i: any) => {
              return (
                <CardWrapperCol key={i.id}>
                  <Card item={i} />
                </CardWrapperCol>
              )
            }
            )
          }
        </CardWrapperRow>

        <div style={{ textAlign: 'center' }}>
          <Button size='medium'>Показать еще</Button>
        </div>
      </Container> */}
      <Container>
        <ProductsTitle title="Ваша подборка для покупок у нас" />
        {width >= 768 ? (
          <Row>
            {
              carddata&&carddata.map((elem:any, i:number)=><Col key={i} xl={3}>
                  <Card item={elem}/>
              </Col>)
            }
          </Row>
        ) : (
          <Row isMobile={true}>
            {
              carddata&&carddata.map((elem:any, i:number)=><Col key={i} sm={4}>
                  <CardMobile item={elem}></CardMobile>
              </Col>)
            }
          </Row>
        )}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button size={width > 768 ? 'medium' : 'large'}>Показать еще</Button>
        </div>
      </Container>
      {width > 768 && <ReklamaMobileApp />}

      {/*       
      </Container>
      <PopularProducts
        leftTitle='Популярные товары'
        cardTitile1='Аксессуары для ванной'
        cardTitile2='Обувь всегда 100 $ и меньше'
        buttonTitle='Купить'
        cardColor1='#EBEBEB'
        cardColor2='#FCF5D2'
        cardimage1={Dishes}
        cardimage2={Shoe}
      />
      <ContactSection /> */}
    </div>
  );
};

export default Homepage;
