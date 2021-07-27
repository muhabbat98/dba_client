import styled from 'styled-components';

export const GoodsGridContainer = styled.div``;

export const FlexRow = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; */
  /* margin-right: -24px;
  margin-left: -24px; */

  display: grid;
  /* grid-row-gap: 24px; */
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  grid-column-gap: 24px;
`;

export const FlexCol = styled.div`
  position: relative;
  width: 100%;
  /* padding-right: 24px;
  padding-left: 24px; */

  /* flex-basis: 0;
  flex-grow: 1;
  max-width: 100%; */
`;
