import React,{useState,useRef,} from 'react'
import StarRaiting from '../../../components/star-rating';
import {ReactComponent as Smile} from '../testimonial/smile.svg'
import {ReactComponent as Like} from '../../../assets/icons/like-hand.svg'
import Button from '../../../components/button';
import Picker from 'emoji-picker-react';
import {
    TestimonalWrapper,
    ItemContainer,
    TopSection,
    TopSectionDiv1,
    TopSectionDiv2,
    SubContainer,
    SmsText,
    SmsActionContainer,
    LikeAndDislike,
    ViewAllTitle,
    TestimonaMarks,
    StarContainer,
    ButtonContainer,
    Textarea,
    LabelSms,
    TextareaButton,
    EmojiContainer

} from './style';

interface Propses {
    item?:any;
}

const  ChatItem:React.FC<Propses> = ({item}) => {
    const refAction = useRef<any>()
    const [viewReplays,setViewReplays] = useState<boolean>(false)
    const [textFild,setTextFild] = useState<boolean>(false);
    const [smile,setSmile] = useState<boolean>(false); 
    const [placeholder,setPlaceholder] = useState<any>('');
    const [replay,setReplay] = useState<boolean>(false);
    const onEmojiClick = (event:any, emojiObject:any) => {
        setPlaceholder(placeholder+emojiObject.emoji)    
    };
    const handelChange = (e:any) =>{
        setPlaceholder(e.target.value)
        // setReplayText(e.target.value)
    }
    const handleBlur = () =>{
        setTextFild(true)
    }
    const onSubmit = () =>{
        console.log('PlaceholderData--->',placeholder)
    }
    return (
        <div>
            <ItemContainer>
                        <TopSection>
                            <TopSectionDiv1><img src={item.avatar}/></TopSectionDiv1>
                            <TopSectionDiv2> 
                                <p>{item.name}</p>
                                <SubContainer>
                                    <StarRaiting inputStar={item.raiting} /> <span>{item.data}</span>
                                </SubContainer>
                            </TopSectionDiv2>
                        </TopSection>    
                        <SmsText>{item.sms}</SmsText>
                        <SmsActionContainer>
                            <p onClick={()=>setReplay(open=>!open)}>Ответить</p>
                            {item.replaysms && <p onClick={()=>setViewReplays(open=>!open)}>Показать ответы 1 </p>}
                            <LikeAndDislike >
                                <div><Like/><span>65</span></div>
                                <div><Like style={{transform:'rotate(180deg)'}}/><span>2</span></div>
                            </LikeAndDislike>
                        </SmsActionContainer>
                        {
                            viewReplays && item.replaysms && item.replaysms.map((replay:any,index:number)=>(
                                <div style={{marginLeft:42}}>
                                    <TopSection>
                                        <TopSectionDiv1><img src={replay.avatar}/></TopSectionDiv1>
                                        <TopSectionDiv2> 
                                            <p>{replay.name}</p>
                                            <SubContainer>
                                                <StarRaiting inputStar={replay.raiting} /> <span>{item.data}</span>
                                            </SubContainer>
                                        </TopSectionDiv2>
                                    </TopSection>    
                                    <SmsText>{replay.sms}</SmsText>
                                    <SmsActionContainer>
                                        <p>Ответить</p>
                                        
                                        <LikeAndDislike >
                                            <div><Like/><span>65</span></div>
                                            <div><Like style={{transform:'rotate(180deg)'}}/><span>2</span></div>
                                        </LikeAndDislike>
                                    </SmsActionContainer>   
                                </div>
                            ))
                        }
                        {replay && 
                            <div style={{marginLeft:42}}>
                            <TopSection>
                                <TopSectionDiv1><img src={item.avatar}/></TopSectionDiv1>
                                <TopSectionDiv2> 
                                    <p>{item.name}</p>
                                    <SubContainer>
                                        <StarRaiting inputStar={item.raiting} /> <span>{item.data}</span>
                                    </SubContainer>
                                </TopSectionDiv2>
                            </TopSection>    
                            <SmsActionContainer>
                                <div style={{position:'relative',width:'100%'}}>
                                    <Textarea state={textFild}>
                                        <div onClick={()=>handleBlur()}>
                                            <LabelSms state={textFild}>Введите описание товара</LabelSms>
                                            <textarea
                                                onBlur={()=>handleBlur()}
                                                rows={7} 
                                                placeholder="Введите описание товара"
                                                ref={refAction}
                                                onChange={(e)=>handelChange(e)}
                                                value={placeholder}
                                                name="placeholder"
                                                />
                                            
                                        </div>
                                        <Smile onClick={()=>setSmile(open=>!open)}/>
                                    </Textarea>
                                    <EmojiContainer state={smile}>
                                        {smile && <Picker onEmojiClick={onEmojiClick} />}
                                    </EmojiContainer>
                                    <TextareaButton>
                                        {!textFild 
                                            ?<Button btnType="disabled">Добавить отзыв</Button>
                                            :<Button onClick={onSubmit}>Добавить отзыв</Button>
                                        }
                                    </TextareaButton>
                                </div>
                            </SmsActionContainer>   
                        </div>
                        }
                        
                    </ItemContainer>
        </div>
    )
}

export default ChatItem
