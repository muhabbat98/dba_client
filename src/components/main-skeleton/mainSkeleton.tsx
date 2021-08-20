import React from "react";
import { useWindowSize } from '../../hooks/useWindowSize';
import Container from "../grid/container";
import BannerSkeleton from '../banner-skeleton';
import TitleSkeleton from '../title-skeleton'
import CardSkeleton from '../cardSkeleton';
import CardBannerSkeleton from '../card-banner-skeleton'
import {SkletonCards} from "./style";

const Skeleton = () => {
    const [width] = useWindowSize()
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
          {width > 768 &&<>
            <div style={{ display: width > 768 ? "flex" : "block", justifyContent: "space-between", marginTop: 20 }}>
              <CardBannerSkeleton />
              <CardBannerSkeleton />
            </div>
            <TitleSkeleton/>
            <SkletonCards>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </SkletonCards>
            <TitleSkeleton/>
            <SkletonCards>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
              <CardSkeleton/>
            </SkletonCards>
          </>}
        </div>
      </Container>
    </div>
  );
};

export default Skeleton;
