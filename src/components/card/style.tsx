import styled from 'styled-components';
import { Link } from 'react-router-dom';


interface Props {
   isInCartStyle?: boolean;
}


export const CardWrapperRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-left: -14px;
   margin-right: -14px;
`;

export const CardWrapperCol = styled.div`
   padding-left: 14px;
   padding-right: 14px;
   flex: 0 0 20%;
   max-width: 20%;
   margin-bottom: 32px;
`;

export const CardWrapper = styled.div`
   border: 2px solid #E9ECF4;
   border-radius: 16px;
   transition: all .25s ease;
   

   &:hover{
      border: 2px solid transparent;
      box-shadow: ${({ theme }) => `${theme.shadow}`};
   }
`;

export const CardHeader = styled.div`
   position: relative;
`;

export const CardLabel = styled.div`
   color: #fff;
   background-color: ${({ theme }) => `${theme.primary_color}`};
   font-size: 12px;
   font-weight: 600;
   padding: 5px 8px;
   position: absolute;
   left: 25px;
   top: 8px;
   z-index: 2;
   border-radius: 16px;
`;

export const CardWishlist = styled.div`
   cursor: pointer;
   margin-right: 18px;
`;

export const CardIconsWrapper = styled.div`
   position: absolute;
   top: 16px;
   right: 20px;
   z-index: 2;

   & > ${CardWishlist} {
      cursor: pointer;
   }
`;

export const CardImageWrapper = styled.div`
   max-width: 100%;
   height: 204px;
   margin: 16px;
   margin-bottom: 20px;
`;

export const CardImg = styled.img`
   max-width: 100%;
   display: block;
   margin: auto;
   height: 204px;
   object-fit: cover;
   border-radius: 8px;
`;

export const CardBody = styled.div`
   padding: 0 25px 25px 25px;
`;

export const CardTitle = styled(Link)`
   color: #000;
   margin-bottom: 13px;
   text-decoration: none;
   line-height: 24px;
   overflow: hidden;
   max-height: 46px;
   height: 46px;
   -webkit-box-orient: vertical;
   display: block;
   display: -webkit-box;
   text-overflow: ellipsis;
   -webkit-line-clamp: 2;
`;

export const CardComents = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 18px;
`;

export const CardStarsWrapper = styled.div`
   
   & > svg {
      margin-right: 3px;
   }
`;

export const CardCommentCount = styled.div`
   color: ${({ theme }) => `${theme.secondary_color}`};
   font-size: 12px;
   margin-left: 5px;
`;

export const CardOldPrice = styled.div`
   font-size: 14px;
   color: ${({ theme }) => `${theme.red}`};
   text-decoration: line-through;
   height: 20px;
   text-align: left;
   margin-bottom: 7px;
`;

export const CardCartWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
`;

export const CardCurrentPrice = styled.div`
   font-size: 20px;
   font-weight: 700;

   & > span{
      font-weight: 400;
   }
`;

export const CardSpan = styled.span`
   position: absolute;
   top: 50%;
   left: 50%;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   opacity: 0;
   visibility: hidden;
   z-index: -1;
   transform: translate(-50%, -50%);
   background-color: ${({ theme }) => `${theme.primary_color}`};
   transition: all .25s ease; 
`;

export const CardCartIcon = styled.div<Props>`
   cursor: pointer;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;

   & > svg{
      & > path{
         transition: all .25s ease; 
         stroke: ${({ isInCartStyle, theme }) => isInCartStyle ? theme.primary_color : theme.grey2};
         /* stroke: ${(p: Props) => p.isInCartStyle ? 'red' : 'green'} */
      }
   }

   /* &:hover > svg{
      & > path{
         fill: ${({ theme }) => `${theme.primary_color}`}
      }
   } */

   

   &:hover {
      & > svg{
         & > path{
         /* stroke: #fff; */
      }
   }

   /* ${CardSpan} {
      width: 40px;
      height: 40px;
      opacity: 1;
      visibility: visible;
   } */
}
`;

