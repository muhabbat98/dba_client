import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div``;

export const CartWrapper = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    background-color: #e9ecf4;
    width: calc(100% - 48px);
    left: 0;
    margin: auto;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`;

export const CartBoxLeft = styled.div`
  display: flex;
`;

export const CartBoxRight = styled.div``;

export const CartBoxLeftContainer = styled.div`
  display: flex;
`;

export const CartBoxRightContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const CartIconWrapper = styled.div`
  padding: 8px;
  border: 1px solid #e9ecf4;
  border-radius: 8px;
  margin-right: 16px;
`;

export const CartItemImage = styled.img`
  width: 84px;
  height: 84px;
  object-fit: cover;
`;

export const CartItemImageLink = styled(Link)`
  display: block;
  width: 84px;
  height: 84px;
`;

export const CartTitle = styled(Link)`
  color: #000;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  line-height: 22px;
  overflow: hidden;
  max-height: 46px;
  height: 46px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

export const CartInfo = styled.div``;

export const CartManufactorName = styled.span``;

export const CartManufactor = styled.span`
  & + ${CartManufactorName}, & {
    color: #808080;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CartDostup = styled.div`
  color: #ff4242;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  white-space: nowrap;
  margin-top: auto;
  margin-bottom: 15px;
`;

export const CartCalculationPart = styled.div`
  display: flex;
`;

export const CartIncrementPart = styled.div`
  margin-right: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartIconPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartPrice = styled.div`
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
`;

export const CartPriceSpan = styled.span``;

export const CartIconWishlistItem = styled.div`
  cursor: pointer;
`;

export const CartCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const CartSoldCount = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
`;

export const CartSoldName = styled.div`
  color: #797979;
  font-size: 16px;
  line-height: 22px;
`;

export const CartSoldAllWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CartSoldAll = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const CartIconDelete = styled.div`
  cursor: pointer;
`;

export const CartSoldAllPrice = styled.div``;

export const CartSoldNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CartSoldPrice = styled.div`
  color: #797979;
  font-size: 16px;
  line-height: 22px;
`;
