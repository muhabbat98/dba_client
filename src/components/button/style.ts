import styled from 'styled-components';
import { theme } from '../../theme';

const ButtonBg = {
  white: '#ffffff',
  outlined: 'rgba(247, 247, 250, 0.1)',
  disabled: 'rgba(38, 71, 150, 0.05)',
  gray:'#F4F5F9',
  default: '#264796'
};
const ButtonFont = {
  white: '#000000',
  outlined: 'theme.primary_color',
  disabled: '#646464',
  gray:"theme.primary_color",
  default:'#ffffff'
};
const ButtonHover = {
  white: '#faf7f7',
  outlined: '#f0efef8a',
  disabled: '',
  gray:'#e7e8eb',
  default:'#2f66e6'
};

interface ButtonType {
  t?: 'white' | 'outlined' | 'disabled'|'gray'|'default';
  size?: 'small' | 'medium' | 'large';
}
const Resizing = (size: any) => {
  if (size == 'large') {
    return 'width:100%';
  } else if (size === 'small') {
    return 'max-width:130px';
  } else {
    return 'width:350px';
  }
};

export const ButtonElement = styled.button<ButtonType>`
  ${({ size }) => Resizing(size)};
  height: ${({ t }) => (t === 'white' ? 40 : 56)}px;
  left: 135px;
  top: 2884px;
  background: ${({ t }) => (t ? ButtonBg[t] : theme.primary_color)};
  border-radius: ${({ t }) => (t === 'white' ? 32 : 12)}px;
  font-size: 16px;
  border: ${({ t }) => (t === 'outlined' ? '2px solid #E9ECF4' : 'none')};
  color: ${({ t }) => (t ? ButtonFont[t] : '#ffffff')};
  font-style: normal;
  font-weight: ${({ t }) => (t === 'white' ? 500 : 600)};
  font-size: 17px;
  line-height: 20px;
  outline: none;
  cursor: pointer;
  padding: 0px 20px 0px 20px;
  transition: 0.3s;
  &:hover {
    ${({ t }) => t == 'disabled' && 'cursor:no-drop'};
    background: ${({ t }) => (t ? ButtonHover[t] : '#2f66e6')}; //#2f66e6;
  }
  @media(max-width: 768px){
    font-size:14px;
    padding: 0px 15px 0px 15px;
  }
  @media(max-width:480px){
    height:48px;
  }
`;
