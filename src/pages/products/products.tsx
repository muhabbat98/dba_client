import React from 'react';
import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Card from '../../components/card';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import { useLocation, } from 'react-router-dom';
import ProductsFilter from './products-filter'

import { CategoryContainer } from './style';

import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';

const data = [
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


const Products = () => {
   const s = new URLSearchParams(useLocation().search);

   return (
      <CategoryContainer>
         <Container>
            <ProductsTitle title="Мобильные телефоны" />
            <Row>
               <Col xl={3}>
                  <ProductsFilter />
               </Col>
               <Col xl={9}>
                  <Row>
                     {
                        data.map(item => (
                           <Col xl={4}>
                              <Card item={item} style={{ marginBottom: '16px' }} />
                           </Col>
                        ))
                     }
                  </Row>
               </Col>
            </Row>
         </Container>
      </CategoryContainer >
   )
}

export default Products
