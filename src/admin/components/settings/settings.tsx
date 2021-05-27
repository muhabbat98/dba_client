import React, { useState } from 'react';
import RightLayer from '../right-layer';
import { SettingsContainer, CatName } from './style';
import { Tab, TabItem } from '../../global-styles';

import Add from './add';
import Change from './change';
import Field from './field';

interface SettingsProps {
  menu: any;
  close: () => void;
  fetchMenu: () => void;
}

enum TabType {
  ADD,
  CHANGHE,
  Field,
}

const Settings: React.FC<SettingsProps> = ({ menu, close, fetchMenu }) => {
  const [tabType, setTabType] = useState(TabType.ADD);

  return (
    <RightLayer close={close}>
      <SettingsContainer>
        <CatName>{menu.catName}</CatName>
        <Tab tabs={3}>
          <TabItem
            onClick={() => setTabType(TabType.ADD)}
            isActive={tabType === TabType.ADD}
          >
            Добавить
          </TabItem>
          <TabItem
            onClick={() => setTabType(TabType.CHANGHE)}
            isActive={tabType === TabType.CHANGHE}
          >
            Изменить
          </TabItem>
          <TabItem
            onClick={() => setTabType(TabType.Field)}
            isActive={tabType === TabType.Field}
          >
            Добавить поле
          </TabItem>
        </Tab>
        {tabType === TabType.ADD && (
          <Add fetchMenu={fetchMenu} close={close} parentId={menu.parentId} />
        )}
        {tabType === TabType.CHANGHE && <Change />}
        {tabType === TabType.Field && <Field parentId={menu.parentId} />}
      </SettingsContainer>
    </RightLayer>
  );
};

export default Settings;
