import React from 'react'
import Title from '../../products-title';
import StarRaiting from '../../star-rating';
import Avatar1 from './avatar1.svg';
import Avatar2 from './avatar2.svg';
import Avatar3 from './avatar3.svg';
import {
    TestimonalWrapper,
    ItemContainer,
    TopSection,
    TopSectionDiv1,
    TopSectionDiv2,
    SubContainer,
    SmsText

} from './style';

const testimonal = [
    {
        name:"Дмитрий",
        data:"13 апреля, 20:15",
        raiting:5,
        sms:"Оригинал, все Круто) Доставка 4 дня 👍",
        like:53,
        disLike:4,
        avatar:Avatar1
    },
    {
        name:"Елизавета",
        data:"09 марта, 10:48",
        raiting:2,
        sms:"iPhone был куплен 12.03.2021, отзыв пишу спустя месяц: 13.04.2021. Пользуюсь Apple с 2013 года и никогда не обращалась в сервисный центр, потому что не было надобности. Ранее не заказывала продукцию Apple на Wildberries, но ввиду скидки решила совершить покупку именно тут. И вот спустя месяц использования телефона, заказанного с данного сайта, перестал работать один из трёх микрофонов. Таким образом, совершение звонков, чтобы собеседник меня слышал, запись голосовых сообщений, использование диктофона - стало невозможным, ввиду того, что микрофон перестал функционировать, телефон становится отчасти бесполезным и непригодным для использования. Надеюсь, что обращение в авторизированный сервисный центр решит проблему. Не советую покупать данную продукцию с сайта Wildberries, иначе можете оказаться в ситуации, где у вас нет возможности получить какие-то гарантии, поддержку, а на обращения вам ответит Ева-бот и надеятся вам можно будет лишь на удачу в этой русской рулетке.",
        like:64,
        disLike:2,
        avatar:Avatar2
    },
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
const  Testimonial = () => {
    return (
        <TestimonalWrapper>
            <Title title="Отзывы"/>
            {
                testimonal.map((item,index)=>(
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
                        <div>
                            
                        </div>
                    </ItemContainer>
                ))
            }
        </TestimonalWrapper>
    )
}

export default Testimonial
