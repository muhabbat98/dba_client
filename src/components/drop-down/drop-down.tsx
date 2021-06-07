import React, { useState, SyntheticEvent, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg';
import {
   DropdownContainer, DropdownHeader, DropdownOptionList, DropdownOption, DropdownHeaderTitle, DropdownOverlay,
   DropdownLabel
} from './style';

interface DropdownProps {
   callback: (data: string) => void;
   label?: string;
   option?: any,
   selected?: string
}

const Dropdown: React.FC<DropdownProps> = ({ callback, label, option, selected }) => {
   console.log('option == ', option);
   console.log('selected == ', selected);

   const options = option.map((item: any, i: any) => {
      return {
         index: i,
         value: item,
         selected: item == selected ? true : false
      }
   })

   // const options = [
   //    { value: 'дешевые сверху', index: 0, selected: false },
   //    { value: 'дорогие сверху', index: 1, selected: false },
   //    { value: 'высокий рейтинг по отзывам', index: 2, selected: false },
   //    { value: 'много отзывов', index: 3, selected: false },
   //    { value: 'по новинкам', index: 4, selected: false },
   //    { value: 'по снижению цены', index: 5, selected: false },
   //    { value: 'по популярности', index: 6, selected: false },
   // ];

   const [isOpen, setIsOpen] = useState('');
   const [selectedOption, setSelectedOption] = useState(null);

   const dropdown = useRef<HTMLUListElement>(null);

   // useEffect(() => {
   //    if (selectedOption === null) {
   //       if (dropdown.current) {
   //          dropdown.current.children[0].classList.add('selected');
   //       }
   //    }
   // }, []);

   const selectItem = (item: any, e: SyntheticEvent) => {
      setSelectedOption(item.value);

      const target = e.target as HTMLLIElement;
      if (target.parentElement?.childElementCount !== undefined) {
         for (let i = 0; i < target.parentElement?.childElementCount; i++) {
            target.parentElement?.children[i].classList.remove('selected');
            console.log(target.parentElement.children[i]);
         }
      }
      target.classList.add('selected');

      toggleList();
      callback(item);
   }

   const toggleList = () => {
      setIsOpen(isOpen == 'active' ? '' : 'active');
   }

   const dropdownOverlayClick = () => {
      setIsOpen('');
   }

   const getActiveName = () => {
      console.log('getactive == ', options);
      const o = options.filter((option:  any) => {
         if (option.selected) {
            return option;
         }
      })
      console.log("o[0] == ", o[0] && o[0].value);
      return o[0] && o[0].value;
   }

   return (
      <>
         {
            isOpen == 'active' ? <DropdownOverlay onClick={dropdownOverlayClick}></DropdownOverlay> : null
         }
         <DropdownContainer>
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