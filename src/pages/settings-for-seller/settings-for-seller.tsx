import React from 'react';
import SellerContent from './seller-content';
import SellerMenu from './seller-menu';
import Container from '../../components/grid/container'
import { SettingsForSellerContainer, Title, MenuAndContent } from './style';

const SettingsForSeller = () => {
  return <Container>
        <SettingsForSellerContainer>
          <Title>Настройки </Title>
          <MenuAndContent>
            <SellerMenu />
            <SellerContent />
          </MenuAndContent>
        </SettingsForSellerContainer>;
      </Container>
  };

export default SettingsForSeller;
