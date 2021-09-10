import React, { FC, useContext } from 'react';
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

interface GoodsGridProps {
  item: any;
}

const GoodsGrid: FC<GoodsGridProps> = ({ item }) => {
  console.log('iiiitem => ', item);

  const getMainImage = (photoArray: any): string => {
    for (let i = 0; i < photoArray.length; i++) {
      if (photoArray[i].isMain) {
        console.log('aaa ');
        return photoArray[i].photoUrl;
      }
    }

    return photoArray[0].photoUrl;
  };

  return (
    <GoodsGridContainer>
      <FlexRow>
        {item.map((i: any) => (
          <FlexCol>
            <Card
              imgUrl={getMainImage(i.addedPhotoWithImageUrls)}
              categoryName="Мобильные телефоны"
              title={i.addProductData.name}
              authorName={i.addProductData.quantity}
              status={true}
              sum={i.addProductData.price}
            />
          </FlexCol>
        ))}
      </FlexRow>
    </GoodsGridContainer>
  );
};

export default GoodsGrid;
