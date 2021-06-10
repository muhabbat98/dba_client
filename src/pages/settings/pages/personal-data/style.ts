import styled from "styled-components";

export const PersonalDataContainer = styled.div`
  padding: 40px;
  border-radius: 16px;
  border: 2px solid #e9ecf4;
`;

export const Div = styled.div`
  height: 2px;
  background-color: #f2f2f2;
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  transition: 0.3s;
  display: flex;
  justify-content: center;
  user-select: none;
  border-radius: 16px;
  cursor: pointer;
  padding: 15px 12px;
  align-items: center;
  :hover {
    background-color: #f4f6f9;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin-left: 14px;
  color: ${({ theme: { primary_color } }) => primary_color};
`;

export const Caption = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.155556px;
  color: ${({ theme: { grey1 } }) => grey1};
  margin-bottom: 4px;
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.155556px;
  color: #000000;
`;
