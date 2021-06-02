import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/ic_close.svg';

export const ContentContainer = styled.div`
  /* top: 0;
  left: 0;
  position: fixed; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 478px;
  padding: 72px 64px 40px 64px;
  border-radius: 16px;
  background: white;
  z-index: 100;
`;

export const CloseIconContainer = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  transition: 0.3s;
  :hover {
    transform: scale(1.2);
  }
`;
