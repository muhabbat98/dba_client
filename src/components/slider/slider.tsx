import React, { FC } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';
import { SwiperContainer } from './style';

import CardImage from '../../assets/images/card-item1.png';
import CardImage2 from '../../assets/images/card-item2.png';
import CardImage3 from '../../assets/images/card-item3.png';
import CardImage4 from '../../assets/images/card-item4.png';
import CardImage5 from '../../assets/images/card-item5.png';
import CardImage6 from '../../assets/images/card-item6.png';
import CardImage7 from '../../assets/images/card-item7.png';
import CardImage8 from '../../assets/images/card-item8.png';
import Card from '../card';


SwiperCore.use([Navigation]);

interface SliderProps {
   data?: any
}

const Slider: FC<SliderProps> = ({ data }) => {
   return (
      <SwiperContainer>
         <Swiper
            navigation
            slidesPerView={4}
            spaceBetween={24}
            // centeredSlides={true}
            breakpoints={{
               576: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
               },
               768: {
                  slidesPerView: 2,
                  // spaceBetween: 20,
               },
               992: {
                  slidesPerView: 3,
                  // spaceBetween: 40,
               },
               1250: {
                  slidesPerView: 4,
                  // spaceBetween: 50,
               },
            }}
         // onSlideChange={() => console.log('slide change')}
         // onSwiper={(swiper) => console.log(swiper)}
         >
            {
               data.map((i: any) => {
                  return (
                     <SwiperSlide key={i.id}>
                        <Card item={i} />
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </SwiperContainer>
   )
}

export default Slider;
