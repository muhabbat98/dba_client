import React from 'react';
import Conatiner from '../../components/grid/container';
import Breadcrumb from '../../components/breadcrumb';
import Menu from './menu';
import Content from './content';
import { SettingsContainer, MenuAndContent, Title } from './style';

const Settings = () => {
  return (
    <Conatiner>
      <SettingsContainer>
        {/* <Breadcrumb title='juebhu' /> */}

        <Title>Настройки </Title>
        <MenuAndContent>
          <Menu />
          <Content />
        </MenuAndContent>
      </SettingsContainer>
    </Conatiner>
  );
};

export default Settings;
