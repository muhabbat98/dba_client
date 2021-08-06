import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';
import {theme} from '../../theme';

interface Error {
    error:boolean,
}
interface IsFocuse{
    isfocus: any;
}

export const InputWrapper = styled.div`
  background: #f4f6f9;
  border-radius: 16px;
  transition: 0.5s all;
  /* width: 343px; */
  height: 66px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
`;

const anim = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

export const InputElement = styled.input<IsFocuse>`
  border: none;
  background: #f4f6f9;
  border-radius: 16px;
  padding: 0px 10px 0px 24px;
  padding-bottom: ${({ isfocus }) => (isfocus? 8 : 0)}px;
  display:flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* cursor:${({ isfocus }) => (isfocus ? 'pointer' : '')}; */
  outline: none;
  height: 100%;
  /* border:1px solid; */
  &:focus{
    padding: 0px 10px 8px 24px;
  }
`;

export const Label = styled.label<IsFocuse>`
  padding: 10px 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: ${({theme})=>theme.blue};
  display: ${({ isfocus }) => (isfocus ? 'block' : 'none')};
  animation: ${anim} 0.4s;
  /* border:1px solid; */
  
`;

export const ErrorTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #F5413D;
  margin:8px 0px 0px 24px;
`;
