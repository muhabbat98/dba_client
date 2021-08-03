import React from 'react';
import Conatiner from '../../components/grid/container';
import Breadcrumb from '../../components/breadcrumb';
import {useWindowSize} from '../../hooks/useWindowSize'
import Menu from './menu';
import Content from './content';
import { SettingsContainer, MenuAndContent, Title } from './style';

const Settings = () => {
const [width,height] = useWindowSize();
  return (
    <Conatiner>
      <SettingsContainer>
        {/* <Breadcrumb title='juebhu' /> */}

        <Title>Настройки </Title>
        <MenuAndContent>
          {width>768 &&
            <Menu />
          }
          <Content />
        </MenuAndContent>
      </SettingsContainer>
    </Conatiner>
  );
};

export default Settings;
