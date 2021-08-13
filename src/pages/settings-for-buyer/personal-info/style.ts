import styled from 'styled-components';

interface Props {
  isEdit?: boolean;
  isAvatar?: boolean;
  isLoading?: boolean;
}

export const PersonalInfoContainer = styled.div<Props>`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 40px 40px 0 40px;
  position: relative;
  height: ${({ isLoading }) => (isLoading ? '400px' : 'auto')};
  overflow: ${({ isLoading }) => (isLoading ? 'hidden' : 'auto')};

  @media (max-width: 768px) {
    border: none;
    padding: 0;
  }
`;

export const PersonalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.grey4};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PersonalHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonalHeaderRight = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export const PersonalAvatar = styled.div`
  margin-right: 32px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
  /* overflow: hidden; */

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
  }
`;

export const PersonalEditImageOther = styled.div`
  & > svg {
    @media (max-width: 768px) {
      width: 20px;
    }
  }
`;

export const PersonalAvatarEdit = styled.div<Props>`
  margin-right: 32px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }

  & > input {
    position: absolute;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;

    & + ${PersonalEditImageOther} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      opacity: 0;
      transition: all 0.3s;

      & > svg {
        position: absolute;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        transition: all 0.3s;
      }
    }

    &:hover + ${PersonalEditImageOther} {
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 1;

      & > svg {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ isAvatar }) =>
      isAvatar ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
  }
`;

export const PersonalAvatarImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  display: block;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const PersonalNameWrapper = styled.div`
  position: relative;
`;

export const PersonalName = styled.h3`
  font-size: 24px;
  font-family: Manrope;
  line-height: 20px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  word-break: break-all;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  }
`;
export const PersonalNameEmail = styled.span`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.grey1};
`;

export const ChangeProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: transparent;
  min-width: 245px;
  position: relative;
  z-index: 4;

  color: ${({ theme }) => theme.primary_color};
  border-radius: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    background: #f4f6f9;
  }
`;

export const ChangeName = styled.span`
  margin-left: 14px;
  display: block;
  white-space: nowrap;
`;

export const PersonalBody = styled.div`
  padding-top: 40px;
`;

export const PersonalBodyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PersonalBodyLabel = styled.span`
  color: ${({ theme }) => theme.grey1};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 4px;
  display: block;
`;

export const PersonalBodyName = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const PersonalBodyFlex = styled.div<Props>`
  margin-bottom: ${({ isEdit }) => (isEdit ? '12px' : '40px')};
`;

export const PersonalEditImage = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;

  &:hover {
    background-color: red;
    transform: ${({ isAvatar }) =>
      isAvatar ? 'translateY(0)' : 'translateY(-50%)'};
  }

  & > svg {
    @media (max-width: 768px) {
      width: 20px;
    }
  }
`;

export const PersonalVerifiedToggle = styled.div`
  background-color: ${({ theme }) => theme.blue};
  position: relative;
  padding: 8px 12px;
  border-radius: 8px;
  color: #fff;
  margin-top: 8px;
  opacity: 0;
  transform: scale(0.95);
  box-shadow: 0px 6px 8px -6px rgba(24, 39, 75, 0.12),
    0px 8px 16px -6px rgba(24, 39, 75, 0.08);
  transition: all 0.25s ease;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${({ theme }) => theme.blue};
    position: absolute;
    top: -7px;
    left: 10px;
  }
`;

export const PersonalVerified = styled.div`
  position: absolute;
  top: 0;
  right: -200px;

  & > svg:hover {
    & + ${PersonalVerifiedToggle} {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
