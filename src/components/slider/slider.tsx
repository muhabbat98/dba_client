import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.css';
import { SwiperContainer } from './style';

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
              data&&data.map((elem:any, i:number)=> <SwiperSlide key={i}>
                     <Card item={elem} />
                  </SwiperSlide>)
            }
            {/* {
               carddata.map((i: any) => {
                  return (
                     <SwiperSlide key={i.id}>
                        <Card item={i} />
                     </SwiperSlide>
                  )
               })
            } */}
         </Swiper>
      </SwiperContainer>
   )
}

export default Slider;
