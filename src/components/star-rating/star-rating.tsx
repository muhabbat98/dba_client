import React, { SyntheticEvent } from 'react';
import { StarRatingContainer, StarRatingUl, StarRatingLi } from './style';

interface StarRatingProps{
   fill?: string,
   callback?: (data: number) => void;
   inputStar?:any;
}

const StarRating: React.FC<StarRatingProps> = ({ fill, callback,inputStar}) => {

   const starColor = '#264796';
   /* When clicked stars */
   const handleClick = (ev: SyntheticEvent) => {
      const currentTarget = ev.currentTarget;
      let selectedCount = Number(currentTarget.getAttribute('data-star'));
      currentTarget.children[0].setAttribute('fill', starColor);
      for (let i = 0; i < 5; i++) {
         if (selectedCount > i) {
            currentTarget.parentElement?.children[i].children[0].setAttribute('fill', starColor);
         } else {
            currentTarget.parentElement?.children[i].children[0].setAttribute('fill', 'transparent');
         }
      }
      callback && callback(selectedCount);
   }

   /** When hovered stars */
   const handleHover = (ev: SyntheticEvent) => {
      const currentTarget = ev.currentTarget;
      let selectedCount = Number(currentTarget.getAttribute('data-star'));
      currentTarget.children[0].setAttribute('fill', starColor);
      for (let i = 0; i < 5; i++) {
         if (selectedCount > i) {
            currentTarget.parentElement?.children[i].children[0].setAttribute('fill', starColor);
         } else {
            currentTarget.parentElement?.children[i].children[0].setAttribute('fill', 'transparent');
         }
      }
   }
   

   return (
      <StarRatingContainer >
         <StarRatingUl>
            { inputStar ?
            [1, 2, 3, 4, 5].map((item,index) => {
                  return (
                     <StarRatingLi data-star={item} key={index} >
                        <svg fill={inputStar>index?starColor:"transparent"} width="15px" height="15px" stroke={starColor} viewBox="0 0 24 24"
                           xmlns="h ttp://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                     </StarRatingLi>
                  )
               })
            :
               [1, 2, 3, 4, 5].map((item,index) => {
                  return (
                     <StarRatingLi data-star={item} onMouseEnter={handleHover} onClick={handleClick} key={index}>
                        <svg fill={fill} width="15px" height="15px" stroke={starColor} viewBox="0 0 24 24"
                           xmlns="h ttp://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                     </StarRatingLi>
                  )
               })
            }
         </StarRatingUl>
      </StarRatingContainer>
   );
}

StarRating.defaultProps = {
   fill: 'transparent'
}

export default StarRating;
