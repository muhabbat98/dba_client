import React from "react";
import Container from "../grid/container";
import BannerSkeleton from '../banner-skeleton';
import TitleSkeleton from '../title-skeleton'
import CardSkeleton from '../cardSkeleton';
import CardBannerSkeleton from '../card-banner-skeleton'
import {SkletonCards} from "./style";

const Skeleton = () => {
  return (
    <div>
      <BannerSkeleton/>
      
      <Container>
        <div>
          <TitleSkeleton/>
          <SkletonCards>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
          </SkletonCards>
          <TitleSkeleton/>
          <div style={{display:"flex", justifyContent:"space-between",marginTop:20}}>
            <CardBannerSkeleton/>
            <CardBannerSkeleton/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skeleton;
