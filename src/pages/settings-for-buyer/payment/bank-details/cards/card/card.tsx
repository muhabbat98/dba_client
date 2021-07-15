import React, { useState } from 'react';
import {
  CardContainer,
  Img,
  CardName,
  UzCardIcon,
  CardNumber,
  SettingsContainer,
  Expiration,
  Dot,
  DotContainer,
} from './style';
import uzCardIcon from '../../../../../../assets/icons/ic_uzcard_blue.svg';
import Settings from './settings';

interface Props {
  card: CardType;
  background: string;
}

const Card: React.FC<Props> = ({ background, card }) => {
  const [open, setOpen] = useState<boolean>(false);

  const openSettings = () => setOpen(true);

  const closeSettings = () => setOpen(false);

  return (
    <CardContainer>
      <CardName>{card.cardName}</CardName>
      <UzCardIcon src={uzCardIcon} />
      <Img src={background} />
      <CardNumber>{card.cardNumber}</CardNumber>
      <Expiration>
        Дата: {card.expirationMonth}/{card.expirationYear}
      </Expiration>
      <SettingsContainer onClick={openSettings}>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        <Settings
          cardNumber={card.cardNumber}
          id={card.id}
          isMain={card.main}
          open={open}
          closeSettings={closeSettings}
        />
      </SettingsContainer>
    </CardContainer>
  );
};

export default Card;
