import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../../index.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import {Wrapper} from './style'
import isEmptyObj from '../../utils/isEmptyObj';

SwiperCore.use([Pagination]);
interface SliderProps{
    items?:any,
}
const MobileSlider:React.FC<SliderProps> = ({items}) => {
    return(
        <div style={{position:'relative',height:"100%",marginTop:20,width:'100%'}}>
            <Swiper pagination={true} className="mySwiper">
                {!isEmptyObj(items)&&items.map((item:any,index:number) => {
                    return(
                    <SwiperSlide key={index}>
                        <div>
                            <Wrapper>
                                <img src={item.photoUrl} alt={item.img}/>
                            </Wrapper>
                        </div>
                    </SwiperSlide>
                    )})}
            </Swiper>
        </div>
    );
}
export default MobileSlider
