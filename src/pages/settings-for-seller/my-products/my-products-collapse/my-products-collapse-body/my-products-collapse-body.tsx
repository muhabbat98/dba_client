import React from 'react';

import {
  MyProductsCollapseBodyContainer,
  MyProductsCollapseTitle,
  MyProductsCollapseImgWrapper,
  MyProductsCollapseImgItem,
  MyProductsDetailsWrapper,
  MyProductsDetailsItem,
  ActivateButtons,
  RedactirovatBtn,
  DedactirovatBtn,
} from './style';

import MyProduct1 from '../../../../../admin/assets/images/goods-item1.png';
import MyProduct2 from '../../../../../admin/assets/images/goods-item2.png';
import MyProduct3 from '../../../../../admin/assets/images/goods-item3.png';
import MyProduct4 from '../../../../../admin/assets/images/goods-item4.png';
import MyProduct5 from '../../../../../admin/assets/images/goods-item5.png';
import MyProduct6 from '../../../../../admin/assets/images/goods-item6.png';
import MyProduct7 from '../../../../../admin/assets/images/goods-item7.png';

const MyProductsCollapseBody = () => {
  return (
    <MyProductsCollapseBodyContainer>
      <MyProductsCollapseTitle>Товар</MyProductsCollapseTitle>

      <MyProductsCollapseImgWrapper>
        <MyProductsCollapseImgItem>
          <img src={MyProduct1} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct2} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct3} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct4} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct5} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct6} />
        </MyProductsCollapseImgItem>

        <MyProductsCollapseImgItem>
          <img src={MyProduct7} />
        </MyProductsCollapseImgItem>
      </MyProductsCollapseImgWrapper>

      <MyProductsCollapseTitle> Информация о товаре </MyProductsCollapseTitle>
      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Наименование товара</MyProductsDetailsItem>
        <MyProductsDetailsItem>
          Samsung / Смартфон Galaxy A51 128Gb
        </MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Количество на складе</MyProductsDetailsItem>
        <MyProductsDetailsItem>100 штук</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Стоимость</MyProductsDetailsItem>
        <MyProductsDetailsItem>3 109 000 сум</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Категория</MyProductsDetailsItem>
        <MyProductsDetailsItem>Мобильные телефоны</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Доставка </MyProductsDetailsItem>
        <MyProductsDetailsItem>Есть</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>Охват территории</MyProductsDetailsItem>
        <MyProductsDetailsItem>Ташкент</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <MyProductsDetailsWrapper>
        <MyProductsDetailsItem>
          Количество проданного товара
        </MyProductsDetailsItem>
        <MyProductsDetailsItem>20/100</MyProductsDetailsItem>
      </MyProductsDetailsWrapper>

      <ActivateButtons>
        <RedactirovatBtn>Редактировать</RedactirovatBtn>
        <DedactirovatBtn>Деактивировать</DedactirovatBtn>
      </ActivateButtons>
    </MyProductsCollapseBodyContainer>
  );
};

export default MyProductsCollapseBody;
