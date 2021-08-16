import React from 'react';
import SellerContent from './seller-content';
import SellerMenu from './seller-menu';
import Container from '../../components/grid/container';
import { useWindowSize } from '../../hooks/useWindowSize';
import { SettingsForSellerContainer, Title, MenuAndContent } from './style';

const SettingsForSeller = () => {
  const [width, height] = useWindowSize();
  return (
    <Container>
      <SettingsForSellerContainer>
        <Title>Настройки </Title>
        <MenuAndContent>
          {width > 768 && <SellerMenu />}
          <SellerContent />
        </MenuAndContent>
      </SettingsForSellerContainer>
      ;
    </Container>
  );
};

export default SettingsForSeller;
