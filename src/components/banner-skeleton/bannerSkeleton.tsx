import React from 'react'
import Container from "../grid/container";
import { TopSkeleton } from "./style";
const  BannerSkeleton = () => {
    return (
        <TopSkeleton>
            <Container>
            <div></div>
            <div></div>
            <div></div>
            </Container>
      </TopSkeleton>
    )
}

export default BannerSkeleton
