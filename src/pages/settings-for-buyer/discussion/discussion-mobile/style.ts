import styled from 'styled-components';

export const DiscussionMobileContainer = styled.div``;

export const DiscussionMobileTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const DiscussionTopTitle = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
`;

export const DiscussionFilterBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterText = styled.div`
  margin-left: 12px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary_color};
`;

export const DiscussionFilterContainer = styled.div``;

export const DiscussionFilterItem = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 38px;
  }
`;
