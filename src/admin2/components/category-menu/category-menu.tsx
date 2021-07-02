import React, { useEffect, useState } from 'react';
import {
  MenuContainer,
  MenuItem,
  Arrow,
  MContainer,
  CatName,
  EmptyContainer,
  SettignsLogo,
} from './style';

import { ReactComponent as Empty } from '../../assets/icons/empty-box.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';
interface MenuProps {
  items: any;
  catName: string;
  setSettings: (m: any) => void;
  parentId: string | null;
  breadCrumb: string;
}

const Menu: React.FC<MenuProps> = ({
  items,
  catName,
  setSettings,
  breadCrumb,
  parentId,
}) => {
  const [actives, setActives] = useState<any>();
  const [subCat, setCubCat] = useState<any>();

  function onClick(data: any) {
    setActives(null);
    setCubCat(null);

    setTimeout(() => {
      let s = items.find((item: any) => item.id === data);
      setActives(data);
      setCubCat(s);
    });
  }

  useEffect(() => {
    return () => {
      setActives(null);
      setCubCat(null);
    };
  }, []);

  return (
    <>
      <MContainer>
        <CatName>
          {catName}

          <SettignsLogo
            onClick={() =>
              setSettings({
                parentId: parentId,
                items: items,
                catName: catName,
                breadCrumb: breadCrumb + ' / ' + catName,
              })
            }
            title='Настройка раздела'
          >
            <Settings />
          </SettignsLogo>
        </CatName>

        <MenuContainer>
          {items.length <= 0 && (
            <EmptyContainer>
              В этом разделы еще нет категории
              <Empty />
            </EmptyContainer>
          )}
          {items.map((item: any) => (
            <MenuItem
              key={item.id}
              onClick={() => onClick(item.id)}
              isActive={item.id === actives}
            >
              <span>{item.name}</span>
              {item.subCategories.length > 0 && (
                <Arrow
                  isActive={item.id === actives}
                  isRight={item.id === actives}
                />
              )}
            </MenuItem>
          ))}
        </MenuContainer>
      </MContainer>
      {subCat && (
        <Menu
          breadCrumb={breadCrumb + ' / ' + catName}
          parentId={subCat.id}
          setSettings={setSettings}
          catName={subCat.name}
          items={subCat.subCategories}
        />
      )}
    </>
  );
};

export default React.memo(Menu);
