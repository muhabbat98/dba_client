import styled from 'styled-components';

export const ProductTitle = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.16px;
    color: #000000;          
`;
export const ReviewsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top:16px;
`;
export const Reviews = styled.div`
    display:flex;
    align-items: center;
    span{
        font-family: Manrope;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;      
        color: #264796;
        margin:0px 6px;
    }
    p{
        margin:0px;
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #000000;
    }
`;
export const PriceTitles = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.16px;
    color: #000000;
    margin-top:16px;
        span{
          margin-left:24px;
          color:#FF4242;
          text-decoration-line: line-through;
        }
`;
export const BinaryTextConatiner = styled.div`
    display: flex;
    align-items: center;
    margin:24px 0px 16px 0px;
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.15px;
        color: #797979;
        margin:0px;
    }
    span{
        font-weight: 600;
        color:#000000;
        margin-left: 8px;
    }
`;
export const ColorsContainer = styled.div`
    display: flex;
    div{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #EAEDF5;
        box-sizing: border-box;
        margin-right: 24px;
        @media(max-width: 768px){
            width:24px;
            height:24px;
        }
    }
`;

