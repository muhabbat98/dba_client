import styled from 'styled-components';

interface ActiveImage{
    isActive?:any;
}

export const DetailHeaderContainer = styled.div`
  border: 2px solid #E9ECF4;
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const LeftPictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 16px;
`;
export const PicturesItem = styled.div<ActiveImage>`
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid #ffffff;
  cursor: pointer;
  border:${({isActive})=>isActive==true ?'2px solid #264796':''};
  
  &:hover {
    border: 2px solid #264796;
    
    img{
      border-radius: 0px;
      transition: .4s;
    }
  }

  div {
    width: 62px;
    height: 62px;
    overflow: hidden;
    margin: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({isActive})=>isActive==true ?"0px":"8px"};

    }
  }
`;
export const MainPicture = styled.div`
  padding: 24px 24px 24px 0px;
  border-right: 2px solid #E9ECF4;

  div {
    box-sizing: border-box;
    border-radius: 16px;
    width: 470px;
    height: 526px;
    //overflow: hidden;
    div{
      border-radius: 0px;
      width: 100%;
      height: 100%;
      //position: absolute;
      //&:nth-child(4){
      //  margin-left: 30px;
      //}
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      border-radius: 16px;

    }
  }
`;
export const ProductInformation = styled.div`
  padding: 24px 25px;
`;
export const InfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    color: #000000;
    margin: 0px;

  }

  svg {
    width: 23px;
    height: 23px;
    margin-top: 6px;
    position: absolute;
    right: 30px;
    top: 20px;
  }
`;
export const RatingContainer = styled.div`
  display: flex;
  margin-top: 16px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    margin: 0px;
  }
`;

export const NewPrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 42px;
  letter-spacing: -0.5px;
  color: #000000;
  margin-top: 34px;
  margin-bottom: 0px;
`;
export const OldPrice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.5px;
  text-decoration-line: line-through;
  color: #FF4242;
  margin: 0px;
`;
export const BinaryTextConatiner = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0px 16px 0px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.15px;
    color: #797979;
    margin: 0px;
  }

  span {
    font-weight: 600;
    color: #000000;
    margin-left: 8px;
  }
`;
export const ColorsContainer = styled.div`
  display: flex;

  div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #EAEDF5;
    box-sizing: border-box;
    margin-right: 24px;
  }
`;
