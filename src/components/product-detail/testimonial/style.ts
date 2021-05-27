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
export const SmsActionContainer = styled.div`
    display: flex;
    margin-bottom:32px;
    p{
        margin:0px;
        cursor:pointer;
        &:nth-child(1){
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.15px;
            text-decoration-line: underline;
            color: #264796;
        }
        &:nth-child(2){
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.15px;
            text-decoration-line: underline;
            color: #797979;
            margin-left: 40px;;
        }
    }

`;
export const LikeAndDislike = styled.div`
    display:flex;
    margin-left:60px;
    div{
        display: flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #797979;
        span{
            margin-left: 10px;
        }
        &:nth-child(2){
            margin-left:16px;
        }
    }
`;
export const ViewAllTitle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.15px;
    text-decoration-line: underline;
    color: #264796;
`;

export const TestimonaMarks = styled.div`
    display: flex;
    margin-top:24px;
    /* align-items: center; */
    p{
        margin:0px;
    }
    span{
        align-self: flex-end;
        margin-bottom:3px;
        margin-left:10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #797979;
    }
`;