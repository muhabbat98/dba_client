import React from 'react';
import { useSelector } from '../../../../../../hooks';
import CardBackground1 from '../../../../../../assets/card-fonts/1.png';
import CardBackground2 from '../../../../../../assets/card-fonts/2.png';
import Card from './card';
import { CardsContainer } from './style';

const Cards = () => {
  const { cards } = useSelector((state) => state.bankDetails);
  const backgrounds: string[] = [CardBackground1, CardBackground2];

  return (
    <CardsContainer>
      {cards.map((card, index) => {
        return <Card key={card.id} card={card} background={backgrounds[1]} />;
      })}
    </CardsContainer>
  );
};

export default Cards;
