import styled from 'styled-components';
import Dishes from '../popularProducts/dishes.svg';

interface Styles{
    image:any,
    color:any,
    compareFont:boolean
}
export const CardBannerWrapper = styled.div<Styles>`
    border-radius: 16px;
    background: ${(props:any)=>props.color};
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:${(props:any)=>props.compareFont?274:382}px;
    background-image:url(${(props:any)=>props.image});
    background-repeat:no-repeat;
    background-position:${(props:any)=>props.compareFont?100:80}% ${(props:any)=>props.compareFont?100:70}%;
        p{
            max-width:320px;
            font-style: normal;
            font-weight: 600;
            font-size: ${(props:any)=>props.compareFont?24:32}px;
            line-height: 32px;
            margin: 54px 0px 0px 40px;
        }
        button{
            
           
            margin-left:45px;
            margin-bottom:45px;
            
        }

`;