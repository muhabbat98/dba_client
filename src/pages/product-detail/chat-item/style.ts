import styled, {keyframes} from "styled-components";

interface Propses {
    state?:boolean;
}

export const TestimonalWrapper = styled.div`

`;
export const ItemContainer = styled.div`
    

`;
export const TopSection = styled.div`
    display: flex;  
    /* align-items: center; */
    
`;
export const TopSectionDiv1 = styled.div`
    width: 48px;
    height:48px;
    overflow: hidden;
    border-radius:50%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const TopSectionDiv2 = styled.div`
    margin-left:16px;
    p{
        font-style: normal;
        margin-top:0px;
        margin-bottom: 8px;;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #000000;
    }
`;
export const SubContainer = styled.div`
    display: flex;
    span{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.15px;
        color: #797979;
    }
`;
export const SmsText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    width:880px;
    @media(max-width: 1000px){
      width:auto;
      text-align: justify;
    }
`;
export const SmsActionContainer = styled.div`
    display: flex;
    margin-bottom:32px;
    //width: 838px;
    p{
        margin:0px;
        cursor:pointer;
        &:nth-child(1){
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.15px;
            text-decoration-line: underline;
            color: #264796;
        }
        &:nth-child(2){
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.15px;
            text-decoration-line: underline;
            color: #797979;
            margin-left: 40px;;
        }
    }

`;
export const LikeAndDislike = styled.div`
    display:flex;
    margin-left:60px;
    div{
        display: flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #797979;
        span{
            margin-left: 10px;
        }
        &:nth-child(2){
            margin-left:16px;
        }
    }
`;
export const ViewAllTitle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.15px;
    text-decoration-line: underline;
    color: #264796;
`;

export const TestimonaMarks = styled.div`
    display: flex;
    margin-top:24px;
    /* align-items: center; */
    p{
        margin:0px;
    }
    span{
        align-self: flex-end;
        margin-bottom:3px;
        margin-left:10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #797979;
    }
`;
export const StarContainer = styled.div`
    display:flex;
    margin-top:30px;
    svg{
        width:18px;
        height: 18px;

    }
    span{
        margin-left:17px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.15px;
        color: #000;
    }
`;
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;

`;
export const Textarea = styled.div<Propses>`
    display: flex;
    background: ${({state})=>state?"#ffffff":"#F4F6F9"};
    border-radius: 16px;
    overflow: hidden;
    margin-top:26px;
    position:relative;
    border:${({state})=>state?"1px solid #1541A9":""};
    &:focus{
            background: #fff;
        }
    div{
        width: 100%;;
    }
    textarea{
        margin-top:${({state})=>state?30:16}px;
        margin-left:16px;
        width:100%;
        border:none;
        background: ${({state})=>state?"#ffffff":"#F4F6F9"};
        outline: none;
        resize: none;
        overflow: hidden;
        
    }
    svg{
        margin:15px 15px 0px 0px;
        cursor:pointer;
      
    }
    
`;
const Anim = keyframes`
    0%{
        opacity:0.6;
        transform: scale(0.5);
    }
    100%{
        opacity:1;
        transform: scale(1);
    }
`;
export const LabelSms = styled.label<Propses>`
    margin:10px 0px 0px 16px;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #0091FF;
    animation: ${({state})=>state? Anim:''} 0.4s;
    visibility: ${({state})=>state?'visible':'hidden'};
`;
export const TextareaButton = styled.div`
    display: flex;
    justify-content:flex-end;
    margin-top: 24px;
`;
export const EmojiContainer = styled.div<Propses>`
    position: absolute;
    top:-360px;
    right: 30px;
    background: #FFFFFF;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    animation: ${({state})=>state? Anim:''} 0.1s;
    display: ${({state})=>state?"block":"none"};
    .emoji-picker-react{
        height:400px;
    }
`;
