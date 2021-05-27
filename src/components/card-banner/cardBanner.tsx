import React from 'react';
import Button from '../button';
import { CardBannerWrapper } from './style';

interface CardBanner {
  title: string;
  image?: any;
  buttonName?: string;
  color: string;
}
export default function CardBanner(props: CardBanner) {
  function compareFont() {
    if (props.title.length >= 30) {
      return true;
    }
    return false;
  }
  return (
    <CardBannerWrapper
      image={props.image}
      color={props.color}
      compareFont={compareFont()}
    >
      <p>{props.title}</p>
      <Button btnType='white' size="small">{props.buttonName}</Button>
    </CardBannerWrapper>
  );
}
