import styled from "styled-components";
import { Link } from "react-router-dom";

import LeftArrow from "../../assets/icons/slider-left-arrow.svg";
import RightArrow from "../../assets/icons/slider-right-arrow.svg";

export const CatalogContainer = styled.div``;

export const SidebarCategoryBox = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
`;

export const MainCatalog = styled.div``;

export const MainCatalogImage = styled.div`
  max-width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-color: #f5f5f5;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const MainCatalogLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const MainCatalogTitle = styled.h3`
  margin: 0;
  text-decoration: none;
  font-family: Manrope;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

export const CatalogSimilarProducts = styled.div``;

export const AdvertiseCatalog = styled.div``;

export const SwiperContainer = styled.div`
  overflow: hidden;

  & .swiper-button-disabled{
    opacity: 1;
    cursor: pointer;
    pointer-events: initial;
  }
  & .swiper-button-next {
    background-image: url(${RightArrow});
    background-repeat: no-repeat;
    /* background-size: 100% auto; */
    background-position: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 10px 30px rgb(0 0 0 / 7%);
    background-color: #fff;
    right: 33px;
    top: 50%;
    transform: translateY(-50%);

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
    background-color: #fff;
    top: 50%;
    left: 29px;
    transform: translateY(-50%);
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
