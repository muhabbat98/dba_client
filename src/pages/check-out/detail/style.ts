import styled from 'styled-components';

export const DetailHeader = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;
export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
`;
interface OrderNumberProps {
  isFree: boolean;
}
export const OrderNumber = styled.div<OrderNumberProps>`
  color: ${({ isFree, theme }) => (isFree ? theme.primary_color : 'grey')};
  font-weight: ${({ isFree }) => (isFree ? '600' : '400')};
`;
export const OrderName = styled.div`
  color: grey;
`;
export const SummData = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: black;
`;
export const SummNumber = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: black;
`;
export const DetailButton = styled.button`
  padding: 16px;
  display: block;
  margin: 16px auto;
`;
