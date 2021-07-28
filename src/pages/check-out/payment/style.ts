import styled from 'styled-components';

export const SampleCard = styled.div`
  display: flex;
`;
export const CardImage = styled.img`
  width: 48px;
  height: 32px;
`;
export const CardData = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;
export const MainCardData = styled.div``;
export const NameCard = styled.div`
  font-size: 16px;
  line-height: 22px;
`;
export const NumberCard = styled.div`
  color: grey;
`;
export const CardMoney = styled.div`
  &::after {
    content: 'сум';
    color: grey;
  }
`;
