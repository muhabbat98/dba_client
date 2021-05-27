import React from 'react';
import {
  RightLayerContainer,
  RightLayerContent,
  Opacity,
  CloseContainer,
} from './style';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface RightLayerProps {
  close: () => void;
}

const RightLayer: React.FC<RightLayerProps> = ({ children, close }) => {
  return (
    <RightLayerContainer>
      <RightLayerContent>
        <CloseContainer onClick={close}>
          <Close />
        </CloseContainer>
        {children}
      </RightLayerContent>
      <Opacity onClick={close} />
    </RightLayerContainer>
  );
};

export default RightLayer;
