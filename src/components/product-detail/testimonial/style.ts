import styled from "styled-components";

export const TestimonalWrapper = styled.div`

`;
export const ItemContainer = styled.div`
    

`;
export const TopSection = styled.div`
    display: flex;  
    /* align-items: center; */
    
`;
export const TopSectionDiv1 = styled.div`
    width: 48px;
    height:48px;
    overflow: hidden;
    border-radius:50%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const TopSectionDiv2 = styled.div`
    margin-left:16px;
    p{
        font-style: normal;
        margin-top:0px;
        margin-bottom: 8px;;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #000000;
    }
`;
export const SubContainer = styled.div`
    display: flex;
    span{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.15px;
        color: #797979;
    }
`;
export const SmsText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    width:880px;
`;