import React from 'react';
import styled from 'styled-components';

interface BarProps {
    state:boolean;
    bar:number;
}
interface ActiveStateProps {
    state:boolean
}
export const MainContainer = styled.div`
    width:100%;
    height:100%;
    background-color: #f6f6f6;
    justify-content:center;
`;
export const MenuButton = styled.button`
    cursor: pointer;
    color: #202020;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    height: auto;
    margin:auto;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 4px;
    border:none;
    -webkit-transition: box-shadow .15s ease-out;
    transition: box-shadow .15s ease-out;
    &:hover {
        box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
    &:focus {
        outline: none;
    }
    
`;

export const IconContainer = styled.div`
    position: relative;
    margin-right: 8px;
    
    width: 16px;    
display: inline-block;
    cursor: pointer;
`;

export const Bar1 = styled.div`
    width: 20px;
    height: 2px;
    background: #202020;
    border-radius: 1px;
    margin: 3px 0;
    transition: 0.3s;
    ${(p:BarProps) => p.state&&p.bar===1?
    `-webkit-transform:rotate(-45deg) translate(-3px, 3px);
    transform: rotate(-45deg) translate(-3px, 3px);`: 
    p.state&&p.bar===2?`opacity: 0;`
    : p.state&&p.bar===3?
    `-webkit-transform: rotate(45deg) translate(-4px, -4px);
    transform: rotate(45deg) translate(-4px, -4px);`:''}
`;

export const MenuContentCard = styled.div`
    display:${(p:ActiveStateProps) =>p.state?`flex`:`none`};
    margin: 0 auto 0;
    transform: translateY(-50%);
    top: 48%;
    left: 0;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    height: 80%;
    max-height:80%;
    position: absolute;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
    background-color: #fff;
    padding: 10px;
    z-index:1;
    @media (max-width: 930px) {
        display:${(p:ActiveStateProps) =>p.state?`block`:`none`};
    }
`;
export const MenuColumn = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: start;
    z-index: 5;
    width:300px;
    min-width:300px;
`;
export const MenuUl = styled.ul`
    height: auto;
    overflow-y: auto;
    list-style:none;
    padding:10px;
    border:none;
    webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    max-height: -webkit-calc(100vh - 250px);
    max-height: calc(100vh - 250px);
    -webkit-transition: max-height .2s ease-out;
    transition: max-height .2s ease-out;
    margin-right: -15px;
    &::-webkit-scrollbar {
        width: 7px;
        cursor: pointer;
      }
    
      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 7px;
      }
    
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #808080;
      }
    
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

`;
export const MenuLi = styled.li`
    
    padding: 10px 40px 10px 0;
    font-size: 14px;
    color: #000;
    position:relative;
    overflow:hidden;
    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 13px;
        right: 25px;
        width: 4px;
        height: 4px;
        background-color: #fff;
    }
    &:hover, &:active, &:focus {
        cursor:pointer;
        font-weight: 500;
        color: #2a50b6; 
        outline:none;
        ${(p:ActiveStateProps)=>p.state?`&::before {
            border: solid #4b6ecd;
            border-width: 0 2px 2px 0;
            display: inline-block;
            margin-right: 2px;
            margin-left: 20px;
            padding: 2px;
            -webkit-transform: rotate(
                -45deg
            );
                -ms-transform: rotate(-45deg);
                transform: rotate(
                    -45deg
            );
        }`:``}
    }
    
`;
export const ActiveLi = styled(MenuLi)`
    cursor:pointer;
    font-weight: 500;
    color: #2a50b6; 
    &::before {
        border: solid #4b6ecd;
        border-width: 0 2px 2px 0;
        display: inline-block;
        margin-right: 2px;
        margin-left: 20px;
        padding: 2px;
        -webkit-transform: rotate(
            -45deg
        );
            -ms-transform: rotate(-45deg);
            transform: rotate(
                -45deg
        );
    }
`;
export const MenuLiHeader = styled.li`
    list-style:none;
    padding: 10px 40px 10px 15px;
    font-size: 14px;
    color: #000;
    position:relative;
    overflow:hidden;
    font-weight: 700;
    cursor:pointer;
    ${(p:ActiveStateProps)=>p.state?`&::before {
        content: "";
        position: absolute;
        z-index: 1;
        top: 13px;
        left: 0;
        width: 4px;
        height: 4px;
        background-color: #fff;
         border: solid #000;
        border-width: 0 2px 2px 0;
        display: inline-block;
        margin-right: 2px;
        margin-left: 2px;
        padding: 2px;
        -webkit-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    `:''}
`;