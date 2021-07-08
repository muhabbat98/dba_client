import styled from 'styled-components';

export const GoodsGridContainer = styled.div``;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -24px;
  margin-left: -24px;
`;

export const FlexCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;

  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;
