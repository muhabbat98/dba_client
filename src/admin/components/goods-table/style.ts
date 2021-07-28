import styled from 'styled-components';

interface Props {
  isActiveStatus: boolean;
}

export const GoodsTableContainer = styled.div``;

export const Order = styled.span``;

export const StatusBox = styled.div<Props>`
  background-color: ${({ isActiveStatus }) =>
    isActiveStatus ? '#EBF9EB' : '#FDEBEB'};
  width: fit-content;
  color: ${({ isActiveStatus }) => (isActiveStatus ? '#3CC13B' : '#F03738')};
  border: 1px solid
    ${({ isActiveStatus }) => (isActiveStatus ? '#9DE09D' : '#F89B9B')};
  line-height: 16px;
  padding: 3px 8px;
  border-radius: 5px;
  height: 24px;
`;
