import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IsInCartProps {
  isInCartStyle?: boolean;
}

export const CardMobileContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e9ecf4;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
`;

export const CardMobileImageWrapper = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const CardMobileImage = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

export const CardMobileBody = styled.div`
  padding: 12px;
`;

export const CardMobileTitle = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 4px;
`;

export const CardMobileWishlist = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  border: 1px solid #e9ecf4;
  border-radius: 100%;
  background-color: #fff;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > svg {
    width: 18px;
    height: 18px;
  }
`;

export const CardOldPrice = styled.div`
  color: #ff4242;
  font-size: 12px;
  line-height: 16px;
  text-decoration: line-through;
  margin-bottom: 4px;
`;

export const CardPrice = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
`;

export const CardMobileCart = styled.div<IsInCartProps>`
  width: 16px;
  height: 16px;

  & > svg {
    width: 16px;
    height: 16px;

    & > path {
      transition: all 0.25s ease;
      stroke: ${({ isInCartStyle }) => (isInCartStyle ? '#264796' : '#BDBDBD')};
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
