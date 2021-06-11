import styled from "styled-components";
import LeftArrow from "../../assets/icons/slider-left-arrow.svg";
import RightArrow from "../../assets/icons/slider-right-arrow.svg";

export const SwiperContainer = styled.div`
  & .swiper-button-next {
    background-image: url(${RightArrow});
    background-repeat: no-repeat;
    /* background-size: 100% auto; */
    background-position: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 10px 30px rgb(0 0 0 / 7%);
    background-color: ${({theme}) => theme.light_grey};
    right: -20px;
  }

  & .swiper-button-next::after {
    display: none;
  }

  & .swiper-button-prev {
    background-image: url(${LeftArrow});
    background-repeat: no-repeat;
    /* background-size: 100% auto; */
    background-position: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 10px 30px rgb(0 0 0 / 7%);
    background-color: ${({theme}) => theme.light_grey};
    left: -20px;
  }

  & .swiper-button-prev::after {
    display: none;
  }

  & .swiper-container {
    overflow: visible;
    position: relative;

    & .swiper-wrapper {
      padding-top: 24px;
      padding-bottom: 30px;
    }

    &::after {
      content: "";
      position: absolute;
      width: calc(90% + 1px);
      height: 110%;
      background-color: #fff;
      top: -20px;
      right: -92%;
      z-index: 3;
    }

    &::before {
      content: "";
      position: absolute;
      width: calc(90% + 1px);
      height: 110%;
      background-color: #fff;
      top: -20px;
      left: -92%;
      z-index: 3;
    }
  }
`;
