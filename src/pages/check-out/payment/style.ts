import styled from 'styled-components';

export const SampleCard = styled.div`
  display: flex;
  @media ${({ theme }) => theme.breakpoints.xs} {
    align-items: center;
    img {
      margin: 0px ;
      margin-right: 10px;
    }
  }
`;
export const CardImage = styled.img`
  width: 48px;
  height: 32px;
  margin:0;
`;
export const CardData = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.xs} {
    align-items: center;
    padding: 0px;
  }
`;
export const MainCardData = styled.div``;
export const NameCard = styled.div`
  font-size: 16px;
  line-height: 22px;
  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 14px;
  }
`;
export const NumberCard = styled.div`
  color: grey;
  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 12px;
  }
`;
export const CardMoney = styled.div`
  &::after {
    content: 'сум';
    color: grey;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    font-size: 14px;
  }
`;
