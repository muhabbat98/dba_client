import styled from 'styled-components';

interface RegionsWrapperProps {
  open: boolean;
}

export const RegionsContainer = styled.div`
  z-index: 98;
`;

export const CurrentRegionContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const CurrentRegionTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  //margin-right: 7px;
  padding: 5px 10px;
  padding-right: 5px;
  padding-left: 0;
  cursor: pointer;
`;

export const RegionsWrapper = styled.div<RegionsWrapperProps>`
  position: absolute;
  top: 120%;
  transition: 0.3s;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px;
  //box-shadow: ${({ theme: { shadow } }) => shadow};
  border-radius: 16px;
  background: white;
  transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0.85)')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export const Region = styled.div<{ active: boolean }>`
  padding: 12px 36px 12px 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${({ theme: { insignificant } }) => insignificant};
  }
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.155556px;
  color: ${({ active, theme: { primary_color } }) =>
    active ? primary_color : 'black'};
  background: ${({ active }) => (active ? '#F4F6F9' : 'transparent')};
`;

export const CurrentRegionTitleContainer = styled.div`
  display: flex;
  align-items: center;

  //width: 150px;
`;
