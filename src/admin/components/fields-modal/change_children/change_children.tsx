import React from 'react';
import { ChangeChildrenContainer } from './style';
import Item from './item';

interface ChangeChildrenProps {
  menu: any;
  close: () => void;
  fetchMenu: () => void;
}

const ChangeChildren: React.FC<ChangeChildrenProps> = ({
  menu,
  close,
  fetchMenu,
}) => {
  return (
    <ChangeChildrenContainer>
      {menu.items.map((item: any, num: number) => (
        <Item close={close} fetchMenu={fetchMenu} item={item} num={num} />
      ))}
    </ChangeChildrenContainer>
  );
};

export default ChangeChildren;
