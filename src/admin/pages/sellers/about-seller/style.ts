import styled from 'styled-components';

export const AboutSellerContainer = styled.div``;

export const TabHeader = styled.div`
  display: flex;
`;

export const TabHeaderItem = styled.div`
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  color: #929399;
  cursor: pointer;
  position: relative;
  margin-right: 70px;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #929399;
  }

  &.active {
    color: ${({ theme }) => theme.primary_color};

    &::after {
      background-color: ${({ theme }) => theme.primary_color};
    }
  }
`;
