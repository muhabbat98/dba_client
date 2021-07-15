import React from 'react';
import SellerContent from './seller-content';
import SellerMenu from './seller-menu';

import { SettingsForSellerContainer, Title, MenuAndContent } from './style';

const SettingsForSeller = () => {
  return <SettingsForSellerContainer>
    <Title>Настройки </Title>
    <MenuAndContent>
      <SellerMenu />
      <SellerContent />
    </MenuAndContent>
  </SettingsForSellerContainer>;
};

export default SettingsForSeller;
