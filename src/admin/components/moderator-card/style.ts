import styled from "styled-components";

export const CardWraper = styled.div`
      background: #FFFFFF;
      border: 1px solid #DFE0EB;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0px 16px;
      max-width:360px;
      width:350px;
      padding:20px 30px;
      margin-bottom: 24px;
      position:relative;
`;
export const ActionBtn = styled.button`
      width: 32px;
      height:32px;
      border:none;
      background: #F7F8FC;
      border-radius: 6px;
      padding-bottom:10px;
      position:absolute;
      top:11px;
      right:11px;
      cursor: pointer;
      outline: none;
`;
export const CardBox = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
`;
export const AvatarImg = styled.div`
      width:80px;
      height:80px;
      border-radius:50%;
      img{
            width:100%;
            height:100%;
            object-fit: cover;
            border-radius:50%;
      }
`;
export const NameTitle = styled.p`
      font-family: Manrope;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #2F3A4A;
      margin:12px 0px 4px 0px;
`;
export const PhoneNumber = styled.p`
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #778192;
      margin: 0px;
`;
export const RoleTitle = styled.p`
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #264796;
      margin: 0px;
`;
export const RoleTags = styled.div`
      display:flex;
      align-items:center;
      justify-content: center;
      flex-wrap: wrap;
      margin-top:12px;
      margin-bottom:12px;
      width:100%;
`;
export const Tag = styled.div`
      padding: 6px 10px;
      height: 26px;
      background: #F7F8FC;
      border-radius: 4px;
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #25262D;
      margin: 4px 4px 0px 0px;

`;
export const Actions = styled.div`
      position: absolute;
      top:48px;
      right:38px;
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0px 10px 40px rgb(0 0 0 / 7%);
      z-index: 5;
      overflow: hidden;
      div{
            padding:11px 16px;
            cursor: pointer;
            svg{
                  margin-right:11px;
            }
            :hover{
                  background: #F5F8FF;
            }
      }

`;