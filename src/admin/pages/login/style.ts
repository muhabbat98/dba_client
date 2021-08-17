import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  background: #264796;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  position: absolute;
  top: 64px;
  left: 64px;
`;

export const LogoContainer = styled.div`
  margin-right: 24px;
`;

export const BrandName = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -0.155556px;
  text-transform: uppercase;
  color: #0091ff;
`;

export const SettingsContainer = styled.div`
  margin: 32px;
  svg {
    width: 100%;
  }
`;
