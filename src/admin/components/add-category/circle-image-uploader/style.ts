import styled from 'styled-components';

interface Props {
  isImage: any;
  isUpload: boolean;
}

function checkBorder(isImage: boolean, isUpload: boolean) {
  if (isImage && !isUpload) {
    return '3px solid #c6c6c6';
  } else if (isUpload) {
    return '3px solid red';
  } else if (!isImage && !isUpload) {
    return 'none';
  }
}

export const CircleImageUploaderContainer = styled.div<Props>`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: #f4f6f9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border: ${({ isImage, isUpload }) => checkBorder(isImage, isUpload)};
  flex-direction: column;
  :hover {
    background: #e4e6e9;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
`;

export const Input = styled.input`
  display: none;
`;

export const IconContainer = styled.img`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #c6c6c6;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 50%;
  //::after {
  //  content: '';
  //  width: 100%;
  //  height: 100%;
  //  position: absolute;
  //}
`;

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 6;
  //border: 1px solid red;
  width: 100%;
  height: 30px;
  display: flex;
  left: 0;
  //bottom: 16px;
  bottom: -100%;
  justify-content: center;
  transition: 0.3s;
`;

export const ViewIconContainer = styled.div`
  width: 32px;
  height: 32px;
  //padding: 3px;
  border: 1px solid #264796;
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;
  a {
    display: flex;
    justify-content: center;
  }
  a svg {
    width: 26px;
    fill: #264796;
  }
`;

export const CancelIconContainer = styled.div`
  width: 32px;
  height: 32px;
  padding: 3px;
  border: 1px solid #264796;
  display: flex;
  justify-content: center;
  background: white;
  cursor: pointer;
  border-radius: 50%;
  svg {
    width: 14px;
    fill: #264796;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: 0.3s;
  border-radius: 50%;
  overflow: hidden;
  //cursor: pointer;
  z-index: 5;
  :hover {
    background: rgba(0, 0, 0, 0.2);
    ${IconWrapper} {
      bottom: 16px;
    }
  }
`;
