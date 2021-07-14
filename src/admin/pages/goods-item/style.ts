import styled from 'styled-components';

export const GoodsItemContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px 24px 130px 24px;
`;

export const GoodsItemContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const GoodsItemBreadCrumb = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 16px;
`;

export const GoodsItemRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.primary_color};
  border-radius: 50%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > svg {
    position: absolute;
    z-index: 1;
  }
`;

export const EditButton = styled.button`
  background-color: #f7f8fc;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #f7f8fc;
  outline: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-weight: 500;
  padding: 10px 12px;

  ${Circle} {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export const GoodName = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const GoodsImages = styled.div`
  display: flex;
`;

export const GoodsImageItem = styled.div`
  margin-right: 16px;
  width: 86px;
  height: 114px;
`;

export const GoodsImg = styled.img`
  width: 86px;
  height: 114px;
  object-fit: cover;
`;
