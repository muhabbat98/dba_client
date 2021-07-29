import styled from 'styled-components';

export const WrapperApp = styled.div`
  width: 100%;
  background: #f2f2f2;
  border-radius: 16px;
  margin-top: 76px;
  margin-bottom: 60px;
  position: relative;

  p {
    width: 430px;
    padding: 0px 0px 20px 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 15px;
    /* line-height: 27px; */
    letter-spacing: -0.155556px;
    color: #000000;
  }
  img {
    position: absolute;
    right: 0;
    bottom: 0px;
  }
`;
export const Brand = styled.div`
  padding: 40px 0px 0px 60px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  /* line-height: 38px; */
  /* letter-spacing: -0.155556px; */
  color: #000000;
`;
export const AppMarkets = styled.div`
  padding: 0px 0px 20px 60px;
  svg {
    height: 64px;
    cursor: pointer;
    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`;
