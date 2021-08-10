import styled from "styled-components";

export const ModalContainer = styled.div`
      position:fixed;
      top:0px;
      left:0px;
      width:100%;
      height:100vh;
      background: rgba(0,0,0,0.5);
      z-index:9999;
      display:flex;
      justify-content:center;
      align-items:center;
      max-height: 100%;
      overflow-y: scroll;
`;
export const AddContainer = styled.div`
      background: #FFFFFF;
      border-radius: 8px;
      padding:30px;
      width:800px;
      //margin-top:100px;
`;
export const Title = styled.div`
      font-family: Manrope;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      color: #000000;
      text-align: center;
`;
export const UploadImg = styled.div`
      width:98px;
      height:98px;
      border-radius:50%;
      margin:40px auto;
      overflow: hidden;
      position:relative;
      /* cursor:pointer; */
      input{
            position: absolute;
            top: 0px;
            left:0px;
            z-index: 99;
            width: 98px;
            height: 98px;
            cursor: pointer;
            opacity: 0;
      }
      img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius: 50%;
      }
`;
export const SelectInput = styled.div`
      background: #F4F6F9;
      border-radius: 16px;
      padding:12px 24px;
      margin-bottom: 16px;
      cursor: pointer;
      position: relative;
      z-index:999;
`;
export const SelectInputTitle = styled.span`
      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;
      color: #0091FF;
`;
export const InputBody = styled.div`
      display:flex;
      justify-content:space-between;
            p{
                  margin-top:4px;
                  margin-bottom:0px;
            }
            svg{
                  width:15px;
                  height: 15px;
            }
`;
export const SelectBox = styled.div`
      position:absolute;
      background: #fff;
      border-radius:16px 0px 0px 16px;
      width:100%;
      box-shadow:0px 0px 4px 1px rgba(0,0,0,0.5);
      right:0px;
      bottom:0px;
      padding:12px 24px;
      overflow-y: scroll;
      height:432px;
            &::-webkit-scrollbar{
                  height: 300px;
                  width:4px;
                  right:10px;
            }
            &::-webkit-scrollbar-track{
                  background: rgba(38, 71, 150, 0.4);
                  margin-right: 10px;
            }
            &::-webkit-scrollbar-thumb{
                  background: #264796;
                  width:10px;
                  border-radius: 20px;
                  border:10px solid #264796;
            }
      div{
            display:flex;
            margin-bottom:24px;
            p{
                  margin:0px;
                  font-family: Manrope;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  display: flex;
                  align-items: center;
                  letter-spacing: -0.155556px;
                  color: #000000;

            }
      }
`;
export const PassError = styled.span`
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      color: #F5413D;
      position:relative;
      top:-7px;
      left:24px;
`;
