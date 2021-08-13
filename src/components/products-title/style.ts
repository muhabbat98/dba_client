import styled from 'styled-components';
interface IPropse{
    fSize?:any;
}
export const Title = styled.p<IPropse>`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 127.1%;    
    letter-spacing: -0.5px;
    color: #000000;
    @media(max-width: 768px){
      font-size: ${({fSize})=>fSize?fSize:20}px;
    }
`;
