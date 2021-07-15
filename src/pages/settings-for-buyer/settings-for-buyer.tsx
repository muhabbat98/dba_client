import React from 'react';
import BuyerMenu from "./buyer-menu";
import BuyerContent from "./buyer-content";
import Title from '../../components/products-title';
import {SettingsForBuyerContainer, MenuAndContent} from './style';
import Container from "../../components/grid/container";

const SettingsForBuyer = () => {
  return (
      <Container>
          <SettingsForBuyerContainer>
              <Title>Настройки </Title>
              <MenuAndContent>
                  <BuyerMenu />
                  <BuyerContent />
              </MenuAndContent>
          </SettingsForBuyerContainer>
      </Container>
  )
};

export default SettingsForBuyer;
