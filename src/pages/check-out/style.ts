import styled from 'styled-components';

interface Props {
  count: string;
}

export const SmallerContainer = styled.div`
  max-width: 588px;
  margin: 0 auto;
  a {
    text-decoration: none;
    font-size: 16px;
    color: ${({ theme }) => theme.grey1};
    font-weight: 400;
    line-height: 20px;
  }
  a::after {
    content: '';
  }
  a:not(:last-child)::after {
    width: 1px;
    height: 16px;
    display: inline-block;
    transform: skewX(-15deg);
    margin: 0px 15px;
    background-color: ${({ theme }) => theme.grey1};
  }
`;
export const CheckOutHeader = styled.h3`
  font-size: 24px;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
`;
export const CheckOutBox = styled.div`
  padding: 2.7rem;
  margin: 2rem 0px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.light_grey};
`;
export const CartHeader = styled.h3`
  font-size: 24px;
  line-height: 1.5rem;
`;
export const CountItems = styled.span``;

export const CartContain = styled.div``;
export const CartContainItem = styled.div`
  margin: 24px 0px;
  display: flex;
`;
export const CartItemMedia = styled.div`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.grey3};
  border-radius: 8px;
`;
export const CartItemImg = styled.img`
  width: 84px;
  height: 84px;
  object-fit: cover;
`;
export const CartItemText = styled.div<Props>`
  padding: 10px 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  &::after {
    content: '${({ count }) => count} шт.';
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding: 12px 0px;
    color: ${({ theme }) => theme.grey1};
  }
`;

// Оформление заказа

export const StepsOrder = styled.div`
  display: flex;
  justify-content: space-between;
  & div > div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.grey1};
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div > p {
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0px;
    font-weight: 600;
  }
  & div:not(:last-child) div::after {
    content: '';
    display: block;
    width: 91px;
    height: 1px;
    background-color: ${({ theme }) => theme.grey1};
    position: absolute;
    right: -120px;
    top: 50%;
  }
`;

export const Recipient = styled.div`
  position: relative;
`;

interface RecipientIconProps {
  active: number;
}

export const RecipientIcon = styled.div<RecipientIconProps>`
  background: ${({ theme, active }) =>
    active === 1 ? theme.primary_color : ''};
  svg {
    width: 23px;
    height: 23px;
  }
`;
export const RecipientText = styled.p``;

export const Address = styled.div``;
export const AddressIcon = styled.div<RecipientIconProps>`
  background: ${({ theme, active }) =>
    active === 1 ? theme.primary_color : ''};

  svg {
    width: 23px;
    height: 23px;
  }
`;
export const AddressText = styled.p``;
export const Payment = styled.div``;
export const PaymentIcon = styled.div<RecipientIconProps>`
  background: ${({ theme, active }) =>
    active === 1 ? theme.primary_color : ''};
`;
export const PaymentText = styled.p``;

export const UserRecipient = styled.input``;
export const NumberRecipient = styled.div``;
export const SendButton = styled.button``;
