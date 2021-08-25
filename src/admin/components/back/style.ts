import styled from 'styled-components';

export const BackContainer = styled.div`
  display: flex;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  padding: 1px 15px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
  }
  :hover {
    background: #e0e1e4;
  }
`;
