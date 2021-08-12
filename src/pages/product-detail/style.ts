import styled from 'styled-components';

export const TabBarHead = styled.div`
    display: flex;
    margin-top: 20px;;
    border-bottom:2px solid #E9ECF4;
;
    div{
        padding:16px 24px;
        /* border-bottom: 4px solid #264796; */
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #797979;
        cursor: pointer;
        @media(max-width: 450px){
          font-size: 14px;
          padding:10px 15px; 
        }
    }
`;
export const DescriptionText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    text-align: justify;
`;
export const Cont = styled.div`
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
    }

    &::before {
        content: "";
        position: absolute;
    }
`;
