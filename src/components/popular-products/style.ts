import styled from 'styled-components';
import Shoe from './shoe.svg'
import Dishes from './dishes.svg'

export const Titles = styled.div`
    display:flex;
    justify-content:space-between;
`;
export const CardBannersWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    div{
        &:nth-child(1){
            margin-right:20px;
        }
    }
`;