import React, { useState, SyntheticEvent, useEffect, useRef } from 'react';
import { DropDownAddProductContainer } from './style';
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg';
import {
  DropdownHeader,
  DropdownOptionList,
  DropdownOption,
  DropdownHeaderTitle,
  DropdownLabel,
} from './style';

interface DropdownProps {
  label?: string;
  option?: any;
  selected?: string;
  style?: any;
  isAdmin?: boolean;
  parentId?: any;
  isReset?: number;
  isAddProduct?: boolean;
  callback?: (data: string, parentId?: any) => void | null;
}

const DropDownAddProduct: React.FC<DropdownProps> = ({
  label,
  option,
  selected,
  style,
  isAdmin,
  parentId,
  isReset,
  isAddProduct,
  callback,
}) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('Tanlang');
  const [stateReset, setStateReset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('click', dropdownOverlayClick);

    return () => {
      window.removeEventListener('click', dropdownOverlayClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isReset && isReset > 0) {
      setStateReset(stateReset + 1);
    }
  }, [isReset]);

  const options = option.map((item: any, i: any) => {
    return {
      index: i,
      value: item,
      selected: item == selected ? true : false,
    };
  });

  const dropdown = useRef<HTMLUListElement>(null);

  const selectItem = (item: any, e: SyntheticEvent, parentId?: any) => {
    setSelectedOption(item.value.name);
    setStateReset(0);

    const target = e.target as HTMLLIElement;
    if (target.parentElement?.childElementCount !== undefined) {
      for (let i = 0; i < target.parentElement?.childElementCount; i++) {
        target.parentElement?.children[i].classList.remove('selected');
      }
    }
    target.classList.add('selected');

    toggleList();
    if (callback) {
      callback(item);
    }
  };

  const toggleList = () => {
    setIsOpen(isOpen == 'active' ? '' : 'active');
  };

  const dropdownOverlayClick = (ev: any) => {
    if (
      isOpen == 'active' &&
      !(toggleRef.current && toggleRef.current.contains(ev.target))
    ) {
      setIsOpen('');
    }
  };

  const getActiveName = () => {
    const o = options.filter((option: any) => {
      if (option.selected) {
        return option;
      }
    });
    return o[0] && o[0].value;
  };

  // function foobar() {
  //    console.log('fooooo  ', isOpen);
  // }

  // foobar();

  console.log('isReset ', isReset);

  return (
    <>
      <DropDownAddProductContainer
        ref={toggleRef}
        className="dropdown-container"
        style={style}
      >
        <DropdownHeader onClick={toggleList}>
          <DropdownLabel>{label}</DropdownLabel>
          <DropdownHeaderTitle>
            {stateReset > 0 ? 'Tanlang' : selectedOption}
            <Arrow />
          </DropdownHeaderTitle>
        </DropdownHeader>
        {
          <DropdownOptionList className={isOpen} ref={dropdown}>
            {options.map((item: any, key: any) => (
              <DropdownOption
                key={key}
                data-index={item.index}
                className={item.selected ? 'selected' : ''}
                onClick={(e: SyntheticEvent) => selectItem(item, e, parentId)}
              >
                {item.value.name}
              </DropdownOption>
            ))}
          </DropdownOptionList>
        }
      </DropDownAddProductContainer>
    </>
  );
};

export default DropDownAddProduct;
