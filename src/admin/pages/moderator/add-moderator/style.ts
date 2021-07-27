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
`;
export const AddContainer = styled.div`
      background: #FFFFFF;
      border-radius: 8px;
      padding:40px;
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
      img{
            width:100%;
            height:100%;
            object-fit:cover;
            /* border-radius: 50%; */
      }
`;