import React from 'react';
import {IconContainer,Bar1} from './style';
 interface ActiveStateProps{
     state:boolean,
 }

const MenuIcon: React.FC<ActiveStateProps>=({state})=>{
    return(<IconContainer >
        <Bar1 bar={1} state={state}></Bar1>
        <Bar1 bar={2} state={state}></Bar1>
        <Bar1 bar={3} state={state}></Bar1>
    </IconContainer>);
}

export default MenuIcon;