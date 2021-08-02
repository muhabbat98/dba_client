import styled from 'styled-components';

interface ReferencesItemRowContainerProps {
  active: boolean;
}

interface Props {
  isActive: boolean;
}

export const Wrapper = styled.div<Props>`
  //display: none;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: 0.2s;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #000000;
  flex: 1;
  //border: 1px solid red;
`;

export const ReferencesItemRowContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: ${({ isActive }) => (isActive ? 'white' : '#f7f8fc')};
  cursor: pointer;
  margin-bottom: 8px;
  transition: 0.2s;
  border-radius: 8px;
  border: ${({ isActive }) =>
    isActive ? '2px solid #264796' : '2px solid transparent'};
  user-select: none;
  :hover {
    border: 2px solid #264796;
    background: white;
    ${Wrapper} {
      opacity: 1;
    }
    ${Name} {
      color: #264796;
    }
  }
`;

export const Action = styled.div`
  svg:nth-child(2) {
    margin-left: 8px;
  }
`;
