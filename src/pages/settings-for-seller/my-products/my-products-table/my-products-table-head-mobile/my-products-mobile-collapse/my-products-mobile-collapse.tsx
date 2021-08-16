import React from 'react';
import Title from '../../../../../../components/products-title';
import {
  MyProductsMobileCollapseContainer,
  ProductsImages,
  ProductsImage,
  ProductsImageWrapper,
  MyProductsMobileDetailsWrapper,
  MyProductsMobileDetailsItem,
  MobileActivateButtons,
  MobileActivateButton,
} from './style';

import MyProduct1 from '../../../../../../admin/assets/images/goods-item1.png';
import MyProduct2 from '../../../../../../admin/assets/images/goods-item2.png';
import MyProduct3 from '../../../../../../admin/assets/images/goods-item3.png';
import MyProduct4 from '../../../../../../admin/assets/images/goods-item4.png';
import MyProduct5 from '../../../../../../admin/assets/images/goods-item5.png';
import MyProduct6 from '../../../../../../admin/assets/images/goods-item6.png';
import MyProduct7 from '../../../../../../admin/assets/images/goods-item7.png';

const MyProductsMobileCollapse = () => {
  return (
    <MyProductsMobileCollapseContainer>
      <Title
        style={{
          paddingLeft: '16px',
          paddingTop: '16px',
          borderTop: '2px solid #e9ecf4',
        }}
        fSize={16}
        title="Товар"
      />
      <ProductsImageWrapper>
        <ProductsImages>
          <ProductsImage src={MyProduct1} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct2} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct3} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct4} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct5} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct6} />
        </ProductsImages>
        <ProductsImages>
          <ProductsImage src={MyProduct7} />
        </ProductsImages>
      </ProductsImageWrapper>

      <Title
        style={{ paddingLeft: '16px' }}
        title="Информация о товаре"
        fSize={16}
      />
      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>
          Наименование товара
        </MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>
          Samsung / Смартфон Galaxy A51 128Gb
        </MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>
          Количество на складе
        </MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>100 штук</MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>Стоимость</MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>3 109 000 сум</MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>Категория</MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>
          Мобильные телефоны
        </MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>Доставка </MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>Есть</MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MyProductsMobileDetailsWrapper>
        <MyProductsMobileDetailsItem>
          Охват территории
        </MyProductsMobileDetailsItem>
        <MyProductsMobileDetailsItem>Ташкент</MyProductsMobileDetailsItem>
      </MyProductsMobileDetailsWrapper>

      <MobileActivateButtons>
        <MobileActivateButton>Редактировать</MobileActivateButton>
        <MobileActivateButton>Деактивировать</MobileActivateButton>
      </MobileActivateButtons>
    </MyProductsMobileCollapseContainer>
  );
};

export default MyProductsMobileCollapse;
