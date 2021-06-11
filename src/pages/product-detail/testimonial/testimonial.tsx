import React,{useState,useRef,useEffect} from 'react'
import Picker from 'emoji-picker-react';
import Title from '../../../components/products-title';
import ChatItem from '../chat-item';
import StarRaiting from '../../../components/star-rating';
import Button from '../../../components/button';
import Avatar1 from './avatar1.svg';
import Avatar2 from './avatar2.svg';
import Avatar3 from './avatar3.svg';
import {ReactComponent as Smile} from './smile.svg'
import {ReactComponent as Like} from '../../../assets/icons/like-hand.svg'
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

const testimonal = [
    {
        name:"Дмитрий",
        data:"13 апреля, 20:15",
        raiting:5,
        sms:"Оригинал, все Круто) Доставка 4 дня 👍",
        like:53,
        disLike:4,
        avatar:Avatar1,
        replaysms:[
            {
                name:"Татьяна",
                data:"04 марта, 16:23",
                raiting:3,
                sms:"Все как в рекламе ! Работает отлично, батарея держит хорошо , в руке удобно держать . Только доставка была долгой , переживала очень , но оно стоило того !",
                like:43,
                disLike:1,
                avatar:Avatar3
            },
            
        ]
    },
    {
        name:"Елизавета",
        data:"09 марта, 10:48",
        raiting:2,
        sms:"iPhone был куплен 12.03.2021, отзыв пишу спустя месяц: 13.04.2021. Пользуюсь Apple с 2013 года и никогда не обращалась в сервисный центр, потому что не было надобности. Ранее не заказывала продукцию Apple на Wildberries, но ввиду скидки решила совершить покупку именно тут. И вот спустя месяц использования телефона, заказанного с данного сайта, перестал работать один из трёх микрофонов. Таким образом, совершение звонков, чтобы собеседник меня слышал, запись голосовых сообщений, использование диктофона - стало невозможным, ввиду того, что микрофон перестал функционировать, телефон становится отчасти бесполезным и непригодным для использования. Надеюсь, что обращение в авторизированный сервисный центр решит проблему. Не советую покупать данную продукцию с сайта Wildberries, иначе можете оказаться в ситуации, где у вас нет возможности получить какие-то гарантии, поддержку, а на обращения вам ответит Ева-бот и надеятся вам можно будет лишь на удачу в этой русской рулетке.",
        like:64,
        disLike:2,
        avatar:Avatar2,
    },
    {
        name:"Татьяна",
        data:"04 марта, 16:23",
        raiting:3,
        sms:"Все как в рекламе ! Работает отлично, батарея держит хорошо , в руке удобно держать . Только доставка была долгой , переживала очень , но оно стоило того !",
        like:43,
        disLike:1,
        avatar:Avatar3,
    },
]
const  Testimonial = () => {
    const refAction = useRef<any>()
    const [viewReplays,setViewReplays] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [textFild,setTextFild] = useState<boolean>(false);
    const [smile,setSmile] = useState<boolean>(false); 
    const [placeholder,setPlaceholder] = useState<any>('');
    const [replayTxt,setReplayText] = useState<any>('');
    const [replay,setReplay] = useState<boolean>(false);
    const onEmojiClick = (event:any, emojiObject:any) => {
        setPlaceholder(placeholder+emojiObject.emoji)    
    };
    const handelChange = (e:any) =>{
        setPlaceholder(e.target.value)
        setReplayText(e.target.value)
    }
   
    // useEffect(()=>{
    //     const leng=refAction && refAction.current.value
    //     if(leng.length>0) {
    //         setTextFild(true);
    //     }
    
    //   })
    const handleBlur = () =>{
        setTextFild(true)
    }
    const onSubmit = () =>{
        console.log('PlaceholderData--->',placeholder)
    }
    return (
        <TestimonalWrapper>
            <Title title="Отзывы"/>
            {
                testimonal.map((item,index)=>(
                    <ChatItem key={index} item={item}/>
                    // <ItemContainer>
                    //     <TopSection>
                    //         <TopSectionDiv1><img src={item.avatar}/></TopSectionDiv1>
                    //         <TopSectionDiv2> 
                    //             <p>{item.name}</p>
                    //             <SubContainer>
                    //                 <StarRaiting inputStar={item.raiting} /> <span>{item.data}</span>
                    //             </SubContainer>
                    //         </TopSectionDiv2>
                    //     </TopSection>    
                    //     <SmsText>{item.sms}</SmsText>
                    //     <SmsActionContainer>
                    //         <p onClick={()=>setReplay(open=>!open)}>Ответить</p>
                    //         {item.replaysms && <p onClick={()=>setViewReplays(open=>!open)}>Показать ответы 1 </p>}
                    //         <LikeAndDislike >
                    //             <div><Like/><span>65</span></div>
                    //             <div><Like style={{transform:'rotate(180deg)'}}/><span>2</span></div>
                    //         </LikeAndDislike>
                    //     </SmsActionContainer>
                    //     {
                    //         viewReplays && item.replaysms && item.replaysms.map((replay,index)=>(
                    //             <div style={{marginLeft:42}}>
                    //                 <TopSection>
                    //                     <TopSectionDiv1><img src={replay.avatar}/></TopSectionDiv1>
                    //                     <TopSectionDiv2> 
                    //                         <p>{replay.name}</p>
                    //                         <SubContainer>
                    //                             <StarRaiting inputStar={replay.raiting} /> <span>{item.data}</span>
                    //                         </SubContainer>
                    //                     </TopSectionDiv2>
                    //                 </TopSection>    
                    //                 <SmsText>{replay.sms}</SmsText>
                    //                 <SmsActionContainer>
                    //                     <p>Ответить</p>
                                        
                    //                     <LikeAndDislike >
                    //                         <div><Like/><span>65</span></div>
                    //                         <div><Like style={{transform:'rotate(180deg)'}}/><span>2</span></div>
                    //                     </LikeAndDislike>
                    //                 </SmsActionContainer>   
                    //             </div>
                    //         ))
                    //     }
                    //     {replay && 
                    //         <div style={{marginLeft:42}}>
                    //         <TopSection>
                    //             <TopSectionDiv1><img src={item.avatar}/></TopSectionDiv1>
                    //             <TopSectionDiv2> 
                    //                 <p>{item.name}</p>
                    //                 <SubContainer>
                    //                     <StarRaiting inputStar={item.raiting} /> <span>{item.data}</span>
                    //                 </SubContainer>
                    //             </TopSectionDiv2>
                    //         </TopSection>    
                           
                    //         <SmsActionContainer>
                    //             <div style={{position:'relative',width:'100%'}}>
                    //                 <Textarea state={textFild}>
                    //                     <div onClick={()=>handleBlur()}>
                    //                         <LabelSms state={textFild}>Введите описание товара</LabelSms>
                    //                         <textarea
                    //                             onBlur={()=>handleBlur()}
                    //                             rows={7} 
                    //                             placeholder="Введите описание товара"
                    //                             ref={refAction}
                    //                             onChange={(e)=>handelChange(e)}
                    //                             value={replayTxt}
                    //                             name="placeholder"
                    //                             />
                                            
                    //                     </div>
                    //                     <Smile onClick={()=>setSmile(open=>!open)}/>
                    //                 </Textarea>
                    //                 <EmojiContainer state={smile}>
                    //                     {smile && <Picker onEmojiClick={onEmojiClick} />}
                    //                 </EmojiContainer>
                    //                 <TextareaButton>
                    //                     {!textFild 
                    //                         ?<Button btnType="disabled">Добавить отзыв</Button>
                    //                         :<Button onClick={onSubmit}>Добавить отзыв</Button>
                    //                     }
                    //                 </TextareaButton>
                    //             </div>
                    //         </SmsActionContainer>   
                    //     </div>
                    //     }
                        
                    // </ItemContainer>
                ))
            }
            <ViewAllTitle>Посмотреть все 1241 отзыв</ViewAllTitle>
            <ButtonContainer>
                <div>
                    <TestimonaMarks>
                        <Title title="Отзывы и оценки"/><span>1241</span>
                    </TestimonaMarks> 
                    <StarContainer>
                        {!open?<StarRaiting inputStar={Math.round(4.8)}/> :<StarRaiting /> }
                        { !open && <span style={{color:"#000",fontWeight:'bold',marginTop:0,fontSize:24}}>4.8</span>}
                    </StarContainer>

                </div>
                {
                    !open && 
                    <Button onClick={()=>setOpen(true)} style={{alignSelf:'center'}}>Написать отзыв</Button>
                }

            </ButtonContainer>    
            {
                open && 
                <div style={{position:'relative',width:"100%"}}>
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
                    <EmojiContainer  state={smile}>
                        {smile && <Picker onEmojiClick={onEmojiClick} />}
                    </EmojiContainer>
                    <TextareaButton>
                        {!textFild 
                            ?<Button btnType="disabled">Добавить отзыв</Button>
                            :<Button onClick={onSubmit}>Добавить отзыв</Button>
                        }
                    </TextareaButton>
                </div>
            }
        </TestimonalWrapper>
    )
}

export default Testimonial
