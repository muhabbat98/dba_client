import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 266px;
  height: 168px;
  position: relative;
  user-select: none;
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const Img = styled.img`
  position: absolute;
`;

export const CardName = styled.div`
  position: absolute;
  left: 24px;
  top: 20px;
  z-index: 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

export const UzCardIcon = styled.img`
  position: absolute;
  right: 24px;
  top: 16px;
  z-index: 2;
`;

export const Expiration = styled.div`
  position: absolute;
  left: 24px;
  bottom: 20px;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const CardNumber = styled.div`
  position: absolute;
  left: 24px;
  bottom: 38px;
  z-index: 2;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: white;
`;

export const SettingsContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  cursor: pointer;
`;
export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  margin-right: 3px;
  :last-child {
    margin-right: 0px;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
