import React, { useState, SyntheticEvent, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg';
import {
   DropdownContainer, DropdownHeader, DropdownOptionList, DropdownOption, DropdownHeaderTitle,
   DropdownLabel
} from './style';

interface DropdownProps {
   callback: (data: string) => void;
   label?: string;
   option?: any,
   selected?: string,
   style?: any
}

const Dropdown: React.FC<DropdownProps> = ({ callback, label, option, selected, style }) => {
   const toggleRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState('');
   const [selectedOption, setSelectedOption] = useState(null);

   useEffect(() => {
      window.addEventListener('click', dropdownOverlayClick);

      return () => {
         window.removeEventListener('click', dropdownOverlayClick);
      }
   }, [isOpen]);

   const options = option.map((item: any, i: any) => {
      return {
         index: i,
         value: item,
         selected: item == selected ? true : false
      }
   })

   const dropdown = useRef<HTMLUListElement>(null);

   const selectItem = (item: any, e: SyntheticEvent) => {
      setSelectedOption(item.value);

      const target = e.target as HTMLLIElement;
      if (target.parentElement?.childElementCount !== undefined) {
         for (let i = 0; i < target.parentElement?.childElementCount; i++) {
            target.parentElement?.children[i].classList.remove('selected');
         }
      }
      target.classList.add('selected');

      toggleList();
      callback(item);
   }

   const toggleList = () => {
      setIsOpen(isOpen == 'active' ? '' : 'active');
   }

   const dropdownOverlayClick = (ev: any) => {
      if (isOpen == 'active' &&
         !(toggleRef.current && toggleRef.current.contains(ev.target))) {
         setIsOpen('');
      }
   }

   const getActiveName = () => {
      const o = options.filter((option: any) => {
         if (option.selected) {
            return option;
         }
      })
      return o[0] && o[0].value;
   }

   // function foobar() {
   //    console.log('fooooo  ', isOpen);
   // }

   // foobar();

   return (
      <>
         <DropdownContainer ref={toggleRef} className="dropdown-container" style={style}>
            <DropdownHeader onClick={toggleList}>
               <DropdownLabel>{label}</DropdownLabel>
               <DropdownHeaderTitle>
                  {
                     getActiveName()
                  }
                  {/* {selectedOption || options[0].value} */}
                  <Arrow />
               </DropdownHeaderTitle>
            </DropdownHeader>
            {
               <DropdownOptionList className={isOpen} ref={dropdown}>
                  {
                     options.map((item: any, key: any) => (
                        <DropdownOption
                           key={key}
                           data-index={item.index}
                           className={item.selected ? 'selected' : ''}
                           onClick={(e: SyntheticEvent) => selectItem(item, e)}
                        >{item.value}</DropdownOption>
                     ))
                  }
               </DropdownOptionList>
            }
         </DropdownContainer>
      </>
   )
}

export default Dropdown;