import React, { useContext } from 'react';
import Card from '../card';
import { GoodsGridContainer, FlexRow, FlexCol } from './style';

import Good1 from '../../assets/images/good1.png';
import Good2 from '../../assets/images/good2.png';
import Good3 from '../../assets/images/good3.png';
import Good4 from '../../assets/images/good4.png';
import Good5 from '../../assets/images/good5.png';
import Good6 from '../../assets/images/good6.png';
import Good7 from '../../assets/images/good7.png';
import Good8 from '../../assets/images/good8.png';

const GoodsGrid = () => {
  return (
    <GoodsGridContainer>
      <FlexRow>
        <FlexCol>
          <Card
            imgUrl={Good1}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good2}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={false}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good3}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good4}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good5}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={false}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good6}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={false}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good7}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good8}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good1}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={true}
            sum="9 148 000 сум"
          />
        </FlexCol>
        <FlexCol>
          <Card
            imgUrl={Good2}
            categoryName="Мобильные телефоны"
            title="Умные часы Samsung Galaxy Watch Active2..."
            authorName="Филипп Назаров"
            status={false}
            sum="9 148 000 сум"
          />
        </FlexCol>
      </FlexRow>
    </GoodsGridContainer>
  );
};

export default GoodsGrid;
