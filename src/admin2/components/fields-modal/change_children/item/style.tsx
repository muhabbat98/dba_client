import styled from 'styled-components';

export const ItemContainer = styled.div`
  margin: 10px 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  svg {
    width: 20px;
    height: 20px;
    fill: red;
    cursor: pointer;
    display: block;
  }
`;
