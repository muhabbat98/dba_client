import React from 'react';
import BuyerMenu from "./buyer-menu";
import BuyerContent from "./buyer-content";
import Title from '../../components/products-title';
import {useWindowSize} from '../../hooks/useWindowSize'
import {SettingsForBuyerContainer, MenuAndContent} from './style';
import Container from "../../components/grid/container";

const SettingsForBuyer = () => {
    const [width,height] = useWindowSize();
  return (
      <Container>
          <SettingsForBuyerContainer>
              <Title>Настройки </Title>
              <MenuAndContent>
                {width>768 &&
                    <BuyerMenu />
                }
                <BuyerContent />
              </MenuAndContent>
          </SettingsForBuyerContainer>
      </Container>
  )
};

export default SettingsForBuyer;
