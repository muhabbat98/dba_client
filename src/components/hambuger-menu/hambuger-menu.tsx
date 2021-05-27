import React,{useEffect, useState} from 'react';
import { BreadcrumbContainer, Stick } from './style';
interface MenuStateProps {
  menuState:any;
};
const Breadcrumb: React.FC<MenuStateProps> = ({menuState}) => {
  const [menuStateCo,SetMenuState]=useState(false);
  useEffect(()=>{
    SetMenuState(menuState);
  },[menuState])
  return (
    <BreadcrumbContainer className={menuStateCo?'active':''}>
      <Stick />
      <Stick />
      <Stick />
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
