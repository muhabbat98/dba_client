import styled from 'styled-components';

export const SellerInformationContainer = styled.div``;

export const SellerInformationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 40px;
`;

export const AvatarBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  margin-right: 25px;
`;

export const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  object-fit: cover;
`;

export const AvatarInformation = styled.div``;

export const AvatarName = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary_color};
  margin-bottom: 8px;
`;

export const AvatarEmail = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const SellerInformationBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 40px;
`;

export const SellerInformationBodyItem = styled.div``;

export const SellerInformationBodyItemLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.grey1};
  line-height: 16px;
  margin-bottom: 4px;
`;

export const SellerInformationBodyItemValue = styled.div`
  color: #565f75;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
`;
