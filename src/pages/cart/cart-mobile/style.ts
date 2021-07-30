import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartMobileContainer = styled.div``;

export const CartMobileList = styled.div``;

export const CartMobileItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-column-gap: 16px;
  border-top: 1px solid #e9ecf4;
  padding: 16px 15px;
`;

export const CheckboxWrapper = styled.div``;

export const CartMobileItemLeft = styled.div`
  position: relative;
`;

export const CartMobileItemRight = styled.div`
  position: relative;

  ${CheckboxWrapper} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const CartMobileItemImgLink = styled(Link)`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid #e9ecf4;
  margin-bottom: 12px;
`;

export const CartMobileImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const Price = styled.div`
  font-size: 16px;
  color: #000;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const Sum = styled.span`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  line-height: 20px;
`;

export const Name = styled.div`
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  max-height: 36px;
  height: 36px;
  display: block;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  margin-bottom: 4px;
`;

export const CartMobileInfo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.grey1};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const Manufactor = styled.div`
  margin-right: 3px;
`;

export const ManufactorName = styled.div``;

export const CartDeleteWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
