import styled from 'styled-components';

export const ReferenceListContainer = styled.div`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #ffffff;
  padding: 24px;
  width: 50%;
  padding-top: 16px;
  max-height: 600px;
  :last-child {
    margin-right: 16px;
  }
`;

export const PlusContainer = styled.div`
  display: inline-block;
  svg {
    cursor: pointer;
    margin-right: 16px;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #264796;
  margin-top: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  user-select: none;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Add = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #0091ff;
  margin-left: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  background: #dfe0eb;
  margin: 16px 0;
`;

export const EmptyMessage = styled.div`
  padding: 16px;
  text-align: center;
  font-weight: bold;
`;
