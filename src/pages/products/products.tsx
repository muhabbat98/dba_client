import React, { useState } from 'react';
import Col from '../../components/grid/col';
import Container from '../../components/grid/container';
import Card from '../../components/card';
import Row from '../../components/grid/row';
import ProductsTitle from '../../components/products-title';
import { useLocation } from 'react-router-dom';
import ProductsFilter from './products-filter';
import { useWindowSize } from '../../hooks/useWindowSize';
import Backdrop from '../../components/backdrop';

import {
  CategoryContainer,
  FilterWrapper,
  FilterBtn,
  MobileFilterWrapper,
  FilterClose,
  FilterName,
} from './style';

import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';
import { ReactComponent as FilterIcon } from '../../assets/icons/product-filter.svg';
import { ReactComponent as FilterCloseIcon } from '../../assets/icons/product-filter-close.svg';

const data = [
  {
    id: '6063033fb1a9f83cc5c61050',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Умные часы Samsung Galaxy Watch Active2...',
    images: [CardImage],
    priceResponse: {
      value: '9148000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '6063033fb1a9f83cc5c123120',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Adidas / Мяч TEAM TrainingPr.',
    images: [CardImage2],
    priceResponse: {
      value: '206049',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '6063033fb1a9f83cc523423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Медиаплеер Apple TV 32GB...',
    images: [CardImage3],
    priceResponse: {
      value: '1849000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },

  {
    id: '606dfsd83cc52sd3423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Adidas / Кроссовки D Rose 773 2020...',
    images: [CardImage4],
    priceResponse: {
      value: '629000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgreteewwsd3423',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'PUMA / Сникеры Puma Backcourt Mid',
    images: [CardImage5],
    priceResponse: {
      value: '682900',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee36343643',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Смартфон iPhone 12 Pro 128GB',
    images: [CardImage6],
    priceResponse: {
      value: '12798000',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee3634453643',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Apple / Наушники AirPods Pro с беспроводным...',
    images: [CardImage7],
    priceResponse: {
      value: '2572000 ',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
  {
    id: '60dfgretee3avcc3443',
    route: '/catalog/details/samsung--6063033fb1a9f83cc5c61050',
    name: 'Sweet Baby / Прогулочная коляска... ',
    images: [CardImage8],
    priceResponse: {
      value: '2085000 ',
      currency: {
        id: '605b73ecd3f290742ec3f957',
        name: 'Uzbekistan Sum',
        shortName: 'сум',
        code: 860,
        format: 2,
      },
    },
  },
];

const Products = () => {
  const [width, heihgt] = useWindowSize();
  const [toggle, setToggle] = useState<boolean>(false);
  const s = new URLSearchParams(useLocation().search);

  const toggleFilter = () => {
    setToggle(!toggle);
  };

  return (
    <CategoryContainer>
      <Container>
        <FilterWrapper>
          <ProductsTitle title="Мобильные телефоны" />{' '}
          <FilterBtn onClick={toggleFilter}>
            <FilterIcon />
          </FilterBtn>
        </FilterWrapper>
        <Row>
          {width > 768 ? (
            <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <ProductsFilter />
            </Col>
          ) : null}
          {width <= 768 ? (
            // <Col sm={12} xs={12}>
            toggle ? (
              <>
                <Backdrop close={toggleFilter} />
                <MobileFilterWrapper>
                  <FilterClose onClick={toggleFilter}>
                    <FilterCloseIcon />
                  </FilterClose>
                  <FilterName>Филтьтры</FilterName>
                  <ProductsFilter />
                </MobileFilterWrapper>
              </>
            ) : null
          ) : // </Col>
          null}

          <Col xl={9} lg={9} md={9} sm={12} xs={12}>
            <Row>
              {data.map((item) => (
                <Col key={item.id} xl={4}>
                  <Card item={item} style={{ marginBottom: '16px' }} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </CategoryContainer>
  );
};

export default Products;
