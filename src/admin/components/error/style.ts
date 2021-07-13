import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-direction: column;
  padding: 32px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  //margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 66px;
  margin-left: 32px;
`;

export const ErrorIconContainer = styled.div`
  svg {
    width: 400px;
    height: 400px;
  }
`;

export const IconContainer = styled.div`
  svg {
    width: 50px;
    height: 50px;
  }
`;
