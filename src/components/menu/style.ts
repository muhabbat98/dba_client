import styled from "styled-components";
interface MenuElsProps{
    restNumEls?:number;
}
export const MenuWrapper = styled.div`
width:auto;
height:85%;
padding: 0.2rem 1rem;
position:absolute;
background-color:white;
border:1px solid #CDCDCD;
border-radius:32px;
z-index:999;
display:inline-block;
transition: all .3s linear;
`;
export const MenuContainer = styled.div`
    width:100%;
    padding: 1rem;

`;
export const BlurLayer = styled.div`
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    z-index:99;
    background: rgba(0, 0, 0, 0.34);
`;
export const CloseButton = styled.div`
z-index:999;
cursor:pointer;
margin: 24px 8px 24px 32px ;
&::before{
    content: '';
    position:absolute;
    width: 25px;
    height: 1.5px;
    background:#828282;
    border-radius:2px;
    transform: translateY(5px) rotate(135deg);
}
&::after{
    content: '';
    position:absolute;
    width: 25px;
    height: 1.5px;
    background:#828282;
    border-radius:2px;
    transform: translateY(5px) rotate(-135deg);
}
`;
export const List = styled.ul`
    padding:8px;
    border-right: 0.5px solid #CDCDCD;
    max-height:81vh;
    overflow-y:auto;
    ::-webkit-scrollbar {
        width: 7px;
        cursor: pointer;
    };
    ::-webkit-scrollbar-thumb {
        background: #F4F6F9;
        border-radius: 8px;
    };
    ::-webkit-scrollbar-track {
        background: white;
        border-radius: 7px;
    };

`;
export const MenuIcon = styled.div`
    display:inline-block;
    padding:inherit;
    path{
        transition:all .2s ease-in;
    }
`;
export const MenuTitle = styled.span`
    line-height:24px;
    font-size:16px;
    display:inline-block;
    padding:8px;
`;
export const ListItem = styled.li`
    list-style:none;
    padding:8px;
    margin:8px 16px 8px 8px;
    display:flex;
    border-radius:16px;
    cursor:pointer;
    color: #000;
    &.active,&:hover{
        background-color:#F4F6F9;
        color:#264796;
        ${MenuIcon} path{
        stroke: #264796;
      }
    }
    transition:all .2s ease-in;
`;
export const ListWrapper = styled.div`
    overflow:auto;
    max-height:80vh;
    margin:16px; 
    ::-webkit-scrollbar {
        width: 7px;
        cursor: pointer;
    };
    ::-webkit-scrollbar-thumb {
        background: #F4F6F9;
        border-radius: 8px;
    };
    ::-webkit-scrollbar-track {
        background: white;
        border-radius: 7px;
    };
`;
export const ChildrenList = styled.ul`
    padding:8px;
    overflow-y:auto; 
   
`;
export const ChildListItem = styled.li` 
    padding:8px;
    display:flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor:pointer;
    color: #646464;
    &.parent{
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color:black;
    }
    &:hover{
        color:#264796;
    }
    transition:all .2s ease-in; 
`;
export const ChildTitle = styled.span`
    font-size:16px;
    display:inline-block;
`;
export const AdvertismentCol = styled.div`
    border-radius: 16px;
    padding:16px;
`;
export const ShowMoreElements = styled.div`
  visibility:hidden;
  height:0;
  transition: all .3s linear;
  &.show{
    height: ${(p:MenuElsProps)=>p.restNumEls?p.restNumEls*20:0}px;
    visibility:visible;
  }
`;