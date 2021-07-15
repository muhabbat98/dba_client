// import React from 'react';

// const Homepage = () => {
//   return <div>Homepage</div>;
// };

// export default Homepage;

import React from 'react';

import Card from '../../components/card';

import PopularProducts from '../../components/popular-products';
import ContactSection from '../../components/contact-section';
import Container from '../../components/grid/container';
import ProductsTitle from '../../components/products-title';
import Banner from '../../components/banner'
import ReklamaMobileApp from '../../components/reklama-mobile-app';
import Button from '../../components/button';
import Row from '../../components/grid/row';
import Col from '../../components/grid/col';

import { CardWrapperRow, CardWrapperCol, Cont } from './style';

import Dishes from "../../assets/images/dishes.svg";
import Shoe from "../../assets/images/shoe.svg";
import Snowboard from "../../assets/images/snowboard.svg";
import Phones from "../../assets/images/phones.svg";
import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';
import CardImage9 from '../product-detail/product-detail-header/images/phoneMain.svg';
import Tiger1 from '../../assets/images/tiger.jpg';
import Tiger2 from '../../assets/images/tiger2.jpg';
import Slider from '../../components/slider';

export const data = [
  {
    "id": "6063033fb1a9f83cc5c612330",
    "route": "/catalog/details/samsung-6063033fb1a9f83cc5c612330",
    "name": "Apple / Смартфон iPhone 11 128GB (новая комплектация)",
    "images": [
      CardImage9
    ],
    "priceResponse": {
      "value": "7574000",
      "currency": {
        "id": "6063033fb1a9f83cc5c612330",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "6063033fb1a9f83cc5c61050",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Умные часы Samsung Galaxy Watch Active2...",
    "images": [
      CardImage
    ],
    "priceResponse": {
      "value": "9148000",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "6063033fb1a9f83cc5c123120",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Adidas / Мяч TEAM TrainingPr.",
    "images": [
      CardImage2
    ],
    "priceResponse": {
      "value": "206049",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "6063033fb1a9f83cc523423",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Apple / Медиаплеер Apple TV 32GB...",
    "images": [
      CardImage3
    ],
    "priceResponse": {
      "value": "1849000",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },

  {
    "id": "606dfsd83cc52sd3423",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Adidas / Кроссовки D Rose 773 2020...",
    "images": [
      CardImage4
    ],
    "priceResponse": {
      "value": "629000",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "60dfgreteewwsd3423",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "PUMA / Сникеры Puma Backcourt Mid",
    "images": [
      CardImage5
    ],
    "priceResponse": {
      "value": "682900",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "60dfgretee36343643",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Apple / Смартфон iPhone 12 Pro 128GB",
    "images": [
      CardImage6
    ],
    "priceResponse": {
      "value": "12798000",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "60dfgretee3634453643",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Apple / Наушники AirPods Pro с беспроводным...",
    "images": [
      CardImage7
    ],
    "priceResponse": {
      "value": "2572000 ",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  },
  {
    "id": "60dfgretee3avcc3443",
    "route": "/catalog/details/samsung--6063033fb1a9f83cc5c61050",
    "name": "Sweet Baby / Прогулочная коляска... ",
    "images": [
      CardImage8
    ],
    "priceResponse": {
      "value": "2085000 ",
      "currency": {
        "id": "605b73ecd3f290742ec3f957",
        "name": "Uzbekistan Sum",
        "shortName": "сум",
        "code": 860,
        "format": 2
      }
    }
  }
]

const Homepage = () => {
  return (
    <div>
      <Banner />

      <Cont>
        <Container>
          <ProductsTitle style={{ marginBottom: '0px' }} title="Новинки" />
          <Slider data={data} />
        </Container>
      </Cont>

      <PopularProducts
        leftTitle='Акции'
        rightTitle='Смотреть все'
        cardTitile1='Оформите Плюс и получите 300 баллов для покупок на Маркете'
        cardTitile2='Мобильные телефоны Купить 4 по цена 3'
        buttonTitle='Подробнее'
        cardColor1='#FCF5D2'
        cardColor2='#EBEBEB'
        cardimage1={Snowboard}
        cardimage2={Phones}
      />

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
        <Row>
          {
            data.map((i: any) => {
              return (
                <Col xl={3}>
                  <Card item={i} />
                </Col>
              )
            }
            )
          }
        </Row>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button size='medium'>Показать еще</Button>
        </div>
      </Container>

      <ReklamaMobileApp />

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
