import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';
import {theme} from '../../theme';

interface Error {
  error:boolean,
}
interface InputStates{
  isfocus: any;
  err:any,
}

export const InputWrapper = styled.div<Error>`
  background: ${({error})=>error?"#FFF4F4":"#f4f6f9"};
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

export const InputElement = styled.input<InputStates>`
  border: none;
  background: ${({err})=>err==="true"?"#FFF4F4":"#f4f6f9"};
  border-radius: 16px;
  padding: 0px 10px 8px 24px;
  margin-top: ${({ isfocus }) => (isfocus? 0 : 22)}px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* cursor:${({ isfocus }) => (isfocus ? 'pointer' : '')}; */
  outline: none;
`;

export const Label = styled.label<InputStates>`
  margin: 10px 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: ${({err})=>err=="true"?"red":theme.blue};
  display: ${({ isfocus }) => (isfocus ? 'block' : 'none')};
  animation: ${anim} 0.4s;
  
  
`;
export const MaskInput = styled(InputMask)<InputStates>`
  color: #262626;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  background: inherit;
  border: none;
  outline: none;
  padding-left: 25px;
  padding-top: ${({isfocus}) => isfocus? 0 : 22}px;
  background: ${({err}) => err=="true"?"#FFF4F4":"#f4f6f9"};

`;
export const ErrorTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #F5413D;
  margin:8px 0px 0px 24px;
`;