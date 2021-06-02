import styled from 'styled-components';

export const NoCardsContainer = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

export const NoCardsIconContainer = styled.div``;

export const Title = styled.div`
  margin: 32px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.155556px;
`;

export const AddButton = styled.div`
  padding: 14px;
  width: 338px;
  max-width: 338px;
  color: white;
  text-align: center;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  background-color: ${({ theme: { primary_color } }) => primary_color};
  border: 2px solid ${({ theme: { primary_color } }) => primary_color};
  :hover {
    background: white;
    font-weight: 600;
    color: ${({ theme: { primary_color } }) => primary_color};
  }
`;
