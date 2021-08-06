import styled from 'styled-components';

interface Props {
  active?: boolean;
}

export const CreateToolbarContainer = styled.div`
  //height: 600px;
  //overflow-y: auto;
  background: white;
  border: 1px solid #dfe0eb;
  padding: 24px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TabWrapper = styled.div`
  display: flex;
`;

export const TabItem = styled.div<Props>`
  text-align: center;
  width: 135px;
  cursor: pointer;
  margin-right: 40px;
  padding: 4px;
  border-bottom: ${({ active }) =>
    active ? '2px solid #264796' : '2px solid #DFE0EB'};
  color: ${({ active }) => (active ? '#264796' : '#929399')};
`;
