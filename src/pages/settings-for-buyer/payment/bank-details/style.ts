import styled from 'styled-components';

export const BankDetailsContainer = styled.div`
  padding: 24px;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #000000;
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Add = styled.div`
  color: ${({ theme: { primary_color } }) => primary_color};
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.1px;
  margin-left: 12px;
`;
