import styled from "styled-components";

export const Container = styled.div`
      background: #FFFFFF;
      border: 1px solid #DFE0EB;
      box-sizing: border-box;
      border-radius: 8px;
      padding:30px 12px;
      position: relative;
`;
export const HeadBox = styled.div`
      display:flex;
      padding:0px 12px;
      justify-content: space-between;
      p{
            margin:0px;
            font-family: Manrope;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.3px;
            color: #252733;
      }
      button{
            display: flex;
            justify-content:space-between;
            width: 244px;
            top: 24px;
            border:none;
            background: #F7F8FC;
            border-radius: 6px;
            padding:11px 16px;
            cursor: pointer;
      }

`;
export const CardContainer = styled.div`
      display: flex;
      justify-content: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top:24px;
      margin-bottom:35px;

`;
export const Pagenition = styled.div`
      display: flex;
      width:100%;
      justify-content:space-between;
      position: absolute;
      bottom:12px;
      padding-left:20px;
      padding-right:40px;
      p{
            margin:0px;
      }
      div{
            display:flex;
      }
      span{       
            background: linear-gradient(0deg, #F5F8FF, #F5F8FF), #3E66FB;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            border-radius: 4px;
            color: rgba(0, 0, 0, 0.5);
            margin-right: 8px;
            cursor: pointer;
            border:1px solid rgba(0,0,0,0.2);
            :hover {
                  background: linear-gradient(0deg, #F5F8FF, #F5F8FF), #3E66FB;
                  color:#000000;
                  border:none;
            }
            &:nth-child(1){
                  background: linear-gradient(0deg, #F5F8FF, #F5F8FF), #3E66FB;
                  color:#000000;
                  border:none;
            }
      }
`;
