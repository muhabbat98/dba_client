import styled from 'styled-components';
import Banner from '../../assets/images/banner.svg'
export const Wrapper = styled.div`
    width:100%;
    height:400px;
    background-image:url(${Banner});
    
`;
export const BannerTitle = styled.p`
width: 520px;
height: 224px;
font-style: normal;
font-weight: 800;
font-size: 56px;
line-height: 100%;
letter-spacing: -2px;
color: #FFFFFF;
@media (max-width: 768px) {
    font-size: 34px;
    width: 312px;
    font-weight: 600;
    line-height: 100%;
    margin-top:80px;
    /* letter-spacing: -7px; */
}
`;