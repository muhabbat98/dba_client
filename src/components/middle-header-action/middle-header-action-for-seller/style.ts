import styled from 'styled-components';

export const MiddleHeaderActionForSellerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
    background: #f2f2f2;
  }
`;

export const ProfilePicture = styled.div``;

export const Img = styled.img``;

export const InfoContainer = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid red;
  padding-bottom: 3px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.005em;
`;

export const Role = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.005em;
  color: #264796;
`;

export const Title = styled.div`
  margin-left: 12px;
`;

export const Exit = styled.div`
  width: 103px;
  display: flex;
  border-radius: 12px;
  background: #f2f2f2;
  border: 1px solid #d1d1d1;
  padding: 12px 16px;
  align-items: center;
  margin-left: 32px;
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;
  //svg {
  //  width: 32px;
  //  height: 32px;
  //}
  :hover {
    background: #d0cfcf;
  }
`;

export const Right = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
