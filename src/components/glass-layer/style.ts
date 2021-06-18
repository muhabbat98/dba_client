import styled from 'styled-components';

export const GlassLayerContainer = styled.div`
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  //backdrop-filter: blur(2.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlassLayerContainerChildren = styled.div`
  z-index: 109;
`;
