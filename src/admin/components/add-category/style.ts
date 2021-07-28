import styled from 'styled-components';

export const AddCategoryContainer = styled.div`
  position: relative;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  width: 20px;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

interface Props {
  grids: number[];
}

export const AddCategoryWrapper = styled.div`
  position: fixed;
  width: 430px;
  background: white;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  padding: 40px;
`;

export const Div = styled.div<{ h: number }>`
  height: ${({ h }) => h + 'px'};
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

export const ImagesUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;
