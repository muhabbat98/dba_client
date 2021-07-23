import React, { useState, useRef, useEffect } from 'react';

import { ReactComponent as Checked } from '../../assets/icons/checked.svg';
import { ReactComponent as Rejected } from '../../assets/icons/rejected.svg';

import {
   OptionBoxContainer, OptionBoxButton, OptionBoxList, OptionBoxListWrapper, Permission, Reject,
   Dot,
} from './style';

const OptionBox = () => {
   const [checked, setChecked] = useState(false);

   const toggleRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      window.addEventListener('click', toggleOptionList);

      return () => {
         window.removeEventListener('click', toggleOptionList);
      }
   }, [checked]);

   const toggleOptionList = (ev: any) => {
      if (checked && !(toggleRef.current && toggleRef.current.contains(ev.target))) {
         setChecked(false);
      }
   }

   return (
      <OptionBoxContainer>
         <OptionBoxButton className={checked ? 'active' : ''} onClick={() => setChecked(!checked)}><Dot></Dot></OptionBoxButton>
         {
            checked ? (
               <OptionBoxListWrapper ref={toggleRef}>
                  <OptionBoxList>
                     <Checked />
                     <Permission>одобрить</Permission>
                  </OptionBoxList>
                  <OptionBoxList>
                     <Rejected />
                     <Reject>отклонить</Reject>
                  </OptionBoxList>
               </OptionBoxListWrapper>
            ) : null
         }
      </OptionBoxContainer>
   );
}

export default OptionBox;
