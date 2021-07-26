import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CheckOutLink = styled(Link)``;
export const CartLink = styled(Link)``;
export const HomeLink = styled(Link)``;

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
export const CartItemText = styled.div`
  padding: 0px 24px;
  font-size: 16px;
  line-height: 22px;
  &::after {
    content: '1 шт.';
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding: 12px 0px;
    color: ${({ theme }) => theme.grey1};
  }
`;
