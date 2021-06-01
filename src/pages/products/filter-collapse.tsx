import React, { useRef, useState, useEffect } from 'react';
import { CollapseContainer, CollapseHeader, CollapseContent, CollapseHeaderIcon } from './style';
import { ReactComponent as Arrow } from "../../assets/icons/down-arrow.svg"

interface CollapseProps {
   headerTitle: string
}

// let count = 0;

const FilterCollapse: React.FC<CollapseProps> = ({ headerTitle, children }) => {
   const [activeState, setActivateState] = useState('active');
   const [heightState, setHeightState] = useState('100%');
   const [rotateState, setRotateState] = useState('active_icon');

   const content = useRef<HTMLDivElement>(null);

   const toggleAccordion = () => {
      setActivateState(activeState == '' ? 'active' : '');
   }

   // console.log('count == ', count);
   useEffect(() => {
      // if (count > 1) {
      // console.log('YESSS', count);
      setHeightState(activeState == "active" ? "0px" : getCurrentContent());
      setRotateState(activeState == 'active' ? 'active_icon' : '');
      // }
   }, [activeState]);

   // if (count == 0) {
   //    count += 2;
   // }

   console.log('heightState == ', heightState);

   // useEffect(()=>{
   //    setHeightState(activeState == "active" ? "100%" : getCurrentContent());
   //    setRotateState(activeState == 'active' ? 'active_icon' : '');
   // }, [])

   const getCurrentContent = () => {
      if (content.current !== null) {
         return content.current.scrollHeight + "px";
      }
      return '';
   }

   return (
      <CollapseContainer>
         <CollapseHeader className={activeState} onClick={toggleAccordion}>{headerTitle}
            <CollapseHeaderIcon className={rotateState}>
               <Arrow />
            </CollapseHeaderIcon>
         </CollapseHeader>
         <CollapseContent ref={content} style={{ maxHeight: `${heightState}` }}>
            <div style={{ paddingBottom: '15px' }}>
               {children}
            </div>
         </CollapseContent>
      </CollapseContainer>
   );
}

export default FilterCollapse;