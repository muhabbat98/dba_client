import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg';
import {
  CurrentRegionContainer,
  CurrentRegionTitle,
  RegionsContainer,
  RegionsWrapper,
  Region,
  CurrentRegionTitleContainer,
} from './style';

import { v4 as uuidv4 } from 'uuid';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    default?: boolean;
  }
}

interface DropdownMenuInterface {
  id: string;
}

const DropdownMenu: React.FC<DropdownMenuInterface> = ({ children, id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [region, setRegion] = useState<string>('Ташкент');
  const [items, setItems] = useState<
    {
      id: string;
      title: string;
      isActive: boolean;
    }[]
  >([]);

  const handleRegion = (region: string) => {
    setRegion(region);
    setOpen(false);
  };

  const clickHandler = (e: any) => {
    if (e.target.classList.contains(id)) {
      return;
    } else {
      setOpen(false);
      window.removeEventListener('click', clickHandler);
    }
  };

  const clickHandle = () => {
    setOpen((o) => !o);
    window.addEventListener('click', clickHandler);
  };

  useEffect(() => {
    const childs: {
      id: string;
      title: string;
      isActive: boolean;
    }[] = [];

    React.Children.map(children, (child: any) => {
      childs.push({
        id: uuidv4(),
        title: child.props.children,
        isActive: child.props.default ? child.props.default : false,
      });
      setItems(childs);
    });
  }, []);

  const activeRegion = items.find((i) => i.isActive);

  const handleActive = (id: string) => {
    const newItems = items.map((i) => {
      if (i.id === id) {
        let item = { ...i, isActive: true };
        return item;
      } else {
        let item = { ...i, isActive: false };
        return item;
      }
    });

    setItems(newItems);
  };

  return (
    <RegionsContainer>
      <CurrentRegionContainer>
        <CurrentRegionTitleContainer className={id} onClick={clickHandle}>
          <CurrentRegionTitle className={id}>
            {activeRegion?.title}
          </CurrentRegionTitle>
          <Arrow />
        </CurrentRegionTitleContainer>
        <RegionsWrapper open={open}>
          {items.map((i) => (
            <Region
              active={i.isActive}
              key={i.id}
              onClick={() => handleActive(i.id)}
            >
              {i.title}
            </Region>
          ))}
        </RegionsWrapper>
      </CurrentRegionContainer>
    </RegionsContainer>
  );
};
export default DropdownMenu;
