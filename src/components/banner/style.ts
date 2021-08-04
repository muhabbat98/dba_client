import styled from 'styled-components';
import Banner from '../../assets/images/banner.svg'

export const Wrapper = styled.div`
    width:100%;
    height:400px;
    background-image:url(${Banner});
    @media (max-width: 768px) {
        background-position: 40% 0%;
        height:300px;
    }
    @media (max-width: 576px) {
        height:200px;
    }
`;
export const BannerTitle = styled.div`
    display:flex;
    align-items: center;
    height: 400px;
    @media (max-width: 768px) {
        height:300px;
    }
    @media (max-width: 576px) {
        height:200px;
    }
    p{
        width: 520px;
        /* height: 224px; */
        font-style: normal;
        font-weight: 800;
        font-size: 56px;
        line-height: 100%;
        letter-spacing: -2px;
        color: #FFFFFF;
        margin:0px;
        @media (max-width: 768px) {
            font-size: 34px;
            width: 312px;
            font-weight: 600;
            line-height: 100%;
        }
        @media (max-width: 576px) {
            font-size:24px;
        }
}
`;