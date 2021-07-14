import React, { useState, useEffect } from 'react';

import {
  SettingsTabContainer,
  SettingsTabHeader,
  SettingsTabHeaderItem,
  SettingsTabBody,
} from './style';

const SettingsTab = () => {
  return (
    <SettingsTabContainer>
      <SettingsTabHeader>
        <SettingsTabHeaderItem to="">Приборная панель</SettingsTabHeaderItem>
        <SettingsTabHeaderItem to="/settings">Настройки </SettingsTabHeaderItem>
        <SettingsTabHeaderItem to="/add-product">
          Добавить товар
        </SettingsTabHeaderItem>
        <SettingsTabHeaderItem to="">Перейте к сайту</SettingsTabHeaderItem>
      </SettingsTabHeader>

      <SettingsTabBody></SettingsTabBody>
    </SettingsTabContainer>
  );
};

export default SettingsTab;
