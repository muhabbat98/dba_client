import React, { FC } from 'react';
import Checkbox from '../../../components/checkbox';

import {
  CardContainer,
  CardImageBox,
  CardImage,
  CardTextBox,
  CardAuthorName,
  CardTitle,
  CardStatus,
  CardBottom,
  CardSum,
  CardCategoryName,
} from './style';

interface CardProps {
  imgUrl?: string;
  categoryName?: string;
  title?: string;
  authorName?: string;
  status?: boolean;
  sum?: string;
}

const Card: FC<CardProps> = ({
  imgUrl,
  categoryName,
  title,
  authorName,
  status,
  sum,
}) => {
  return (
    <CardContainer>
      <CardImageBox>
        <CardImage src={imgUrl} />
      </CardImageBox>

      <CardTextBox>
        <CardCategoryName to="">{categoryName}</CardCategoryName>
        <CardTitle to="">{title}</CardTitle>
        <CardAuthorName>{authorName}</CardAuthorName>
        <CardStatus style={{ color: status ? ' #3CC13B' : '#F03738' }}>
          {status ? 'Активный' : 'Неактивный'}
        </CardStatus>
        <CardBottom>
          <CardSum>{sum}сум</CardSum>
          <Checkbox />
        </CardBottom>
      </CardTextBox>
    </CardContainer>
  );
};

export default Card;
