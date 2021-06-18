import styled from "styled-components";

export const WishlistContainer = styled.div``;

export const WishlistWrapperRow = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  margin-left: -14px;
  margin-right: -14px; */
  padding-bottom: 240px;
`;

export const WishlistWrapperCol = styled.div`
  padding-left: 14px;
  padding-right: 14px;
  flex: 0 0 20%;
  max-width: 20%;
  margin-bottom: 32px;
`;

/** WishlistEmpty.tsx */
export const WishlistEmptyContainer = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 200px;
`;

export const WishlistEmptyImg = styled.div`
  text-align: center;
  margin-bottom: 32px;

  & > svg {
    display: block;
    margin: auto;
  }
`;

export const WishlistEmptyTextBox = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const WishlistEmptyTitle = styled.div`
  line-height: 18px;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 15px;
`;

export const WishlistEmptyText = styled.div`
  color: #333333;
  font-size: 14px;
`;
