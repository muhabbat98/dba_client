import React, { useState } from 'react';
import {
  FieldsModalContainer,
  TitleContainer,
  Title,
  BreadCrumb,
  ContentContainer,
} from './style';
import { Tab, TabItem } from '../../global-styles';
import Modal from '../modal';
import AddCategory from './add_category';
import AddField from './add_field';
import AllFields from './all_fields';
import ChangeCategory from './change_category';
import ChangeChildren from './change_children';
import MetaData from './meta-data';
import Reference from './reference';

interface FieldsModal {
  close: () => void;
  fetchMenu: () => void;
  menu: any;
}

enum TabType {
  ADD_FIELD,
  ALL_FIELDS,
  CHANGE_CHILDREN,
  ADD_CATEGORY,
  CAHNGE_CATEGORY,
  META_DATA,
  REFERENCE,
}

const FieldsModal: React.FC<FieldsModal> = ({ close, menu, fetchMenu }) => {
  const [tapType, setTabType] = useState(
    menu.parentId ? TabType.ADD_FIELD : TabType.CHANGE_CHILDREN
  );

  return (
    <Modal close={close}>
      <FieldsModalContainer>
        <TitleContainer>
          <Title>{menu.catName}</Title>
          <BreadCrumb>{menu.breadCrumb.slice(3)}</BreadCrumb>
        </TitleContainer>
        <Tab tabs={7}>
          {menu.parentId && (
            <TabItem
              onClick={() => setTabType(TabType.ADD_FIELD)}
              isActive={tapType === TabType.ADD_FIELD}
            >
              Добавить поле
            </TabItem>
          )}

          {menu.parentId && (
            <TabItem
              onClick={() => setTabType(TabType.ALL_FIELDS)}
              isActive={tapType === TabType.ALL_FIELDS}
            >
              Все поле
            </TabItem>
          )}

          <TabItem
            onClick={() => setTabType(TabType.CHANGE_CHILDREN)}
            isActive={tapType === TabType.CHANGE_CHILDREN}
          >
            Подкатегория
          </TabItem>
          <TabItem
            onClick={() => setTabType(TabType.ADD_CATEGORY)}
            isActive={tapType === TabType.ADD_CATEGORY}
          >
            Добавить категория
          </TabItem>

          {menu.parentId && (
            <TabItem
              onClick={() => setTabType(TabType.CAHNGE_CATEGORY)}
              isActive={tapType === TabType.CAHNGE_CATEGORY}
            >
              Изменить
            </TabItem>
          )}
          {menu.parentId && (
            <TabItem
              onClick={() => setTabType(TabType.META_DATA)}
              isActive={tapType === TabType.META_DATA}
            >
              Добавить шаблонь
            </TabItem>
          )}

          {menu.parentId && (
            <TabItem
              onClick={() => setTabType(TabType.REFERENCE)}
              isActive={tapType === TabType.REFERENCE}
            >
              Справочник
            </TabItem>
          )}
        </Tab>

        <ContentContainer>
          {tapType === TabType.ADD_CATEGORY && (
            <AddCategory close={close} menu={menu} fetchMenu={fetchMenu} />
          )}
          {tapType === TabType.ADD_FIELD && <AddField menu={menu} />}
          {tapType === TabType.ALL_FIELDS && <AllFields menu={menu} />}
          {tapType === TabType.CAHNGE_CATEGORY && (
            <ChangeCategory close={close} menu={menu} fetchMenu={fetchMenu} />
          )}
          {tapType === TabType.CHANGE_CHILDREN && (
            <ChangeChildren menu={menu} close={close} fetchMenu={fetchMenu} />
          )}
          {tapType === TabType.META_DATA && <MetaData menu={menu} />}
          {tapType === TabType.REFERENCE && <Reference menu={menu} />}
        </ContentContainer>
      </FieldsModalContainer>
    </Modal>
  );
};

export default FieldsModal;
