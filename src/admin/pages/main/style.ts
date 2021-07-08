import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  position: relative;
`;

export const LeftSide = styled.div`
  width: 280px;
  background-color: #363740;
  height: 100vh;
  position: fixed;
`;

export const RightSide = styled.div`
  background-color: #f7f8fc;
  flex: 1;
  height: 6000px;
  margin-left: 280px;
  padding: 0 24px 50px 24px;
`;
