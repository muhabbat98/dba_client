import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 40px 24px 24px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainerLeft = styled.div``;

export const HeaderContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-family: Manrope;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
`;

export const HeaderNotification = styled.div``;

export const HeaderGoToHome = styled.div`
  font-size: 14px;
  font-family: Manrope;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-right: 24px;
  padding-left: 24px;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 32px;
    background: #dfe0eb;
    top: 0;
    right: 0;
  }

  & > span {
    color: ${({ theme }) => theme.primary_color};
  }

  & > svg {
    margin-right: 12px;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderProfileLeft = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-family: Manrope;
  font-weight: 600;
  padding-left: 24px;
  padding-right: 14px;
  text-align: right;
`;

export const HeaderProfileRight = styled.div``;

export const AvatarBox = styled.div`
  border: 1.5px solid #dfe0eb;
  border-radius: 50%;

  & > div {
    width: 44px;
    height: 44px;
    border: 2px solid transparent;
    border-radius: 100%;
    overflow: hidden;
  }
`;

export const AvatarImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
