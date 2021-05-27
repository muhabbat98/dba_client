import React, { useEffect, MouseEvent } from 'react';
import { GlassLayerContainer, GlassLayerContainerChildren } from './style';

interface GlassLayerProps {
  close: () => void;
}

const GlassLayer: React.FC<GlassLayerProps> = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const clickHandler = (e: any) => {
    if (e.target.classList.contains('glass-container')) {
      close();
    }
  };

  return (
    <GlassLayerContainer className='glass-container' onClick={clickHandler}>
      <GlassLayerContainerChildren className='yyy'>
        {children}
      </GlassLayerContainerChildren>
    </GlassLayerContainer>
  );
};

export default GlassLayer;
