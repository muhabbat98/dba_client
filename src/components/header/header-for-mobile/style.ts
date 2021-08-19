import styled from 'styled-components';
import search from '../../../assets/icons/search-grey.svg'

export const HeaderForMobileContainer = styled.div`
    position:relative;
`
export const LogoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 19px;
`;

export const LeftMenuBtn = styled.div``;
export const Marketplace = styled.h2`
    margin:0px;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
`;
export const Basket = styled.div`
    display: inline-block;
    position: relative;
`;

export const InputHeader = styled.div`

`;

export const MLink = styled.a`
    
    text-transform: uppercase;
    color: ${({theme})=>theme.blue};
    text-decoration: none;
`;
export const SearchInput = styled.div`
    margin: 2px 16px;
    input{
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        border:none;
        outline: none;
        border-radius: 16px;
        width: 100%;
        padding: 12px;
        background: url(${search}) no-repeat right 20px bottom 50%, #F2F2F2;
    }
  
`;


export const ScrollableHeader = styled.div`
`;

export const List = styled.ul`
    display: flex;
    overflow-x: auto;
    padding: 12px 0px;
    ::-webkit-scrollbar{
        height: 0px;
    }
`;

  
export const ListItem = styled.li`
    display: block;
 
 
`;
interface LinkProps {
    isActive: boolean;
  }
export const ListLink = styled.a<LinkProps>`
        font-family: Manrope;
        font-style: normal;
        font-weight: normal;
        color:${({theme, isActive})=> isActive? theme.primary_color:theme.grey1};
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        white-space: nowrap;
        padding: 12px 16px;
`;




