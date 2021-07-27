import React from 'react';

import {
   SellerInformationContainer, SellerInformationHeader, AvatarBox, AvatarImg, AvatarInformation,
   AvatarName, AvatarEmail, SellerInformationBody, SellerInformationBodyItem, SellerInformationBodyItemLabel,
   SellerInformationBodyItemValue
} from './style';

import Avatar from '../../../../assets/images/seller-avatar.png';

const SellerInformation = () => {
   return (
      <SellerInformationContainer>
         <SellerInformationHeader>
            <AvatarBox>
               <AvatarImg src={Avatar} />
            </AvatarBox>

            <AvatarInformation>
               <AvatarName>Алексей Казаков</AvatarName>
               <AvatarEmail>martin.merces@gmail.com</AvatarEmail>
            </AvatarInformation>
         </SellerInformationHeader>

         <SellerInformationBody>
            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Название предприятия</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Sherin</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Расчетный счет в банке</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>1420 0030 2000 6552</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>РКП НДС</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>1200 3256</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Тип удостоверяющего документа руководител</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>id карта</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Номер телефона(мобильный)</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>+99890 002 6655</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Вид деятельности</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Предприниматель</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>ОКЭД</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>6540 3210 5487 2200</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Серия и номер документа</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Не указан</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Номер телефона (домашний)</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Не указан</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>ИНН</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>576 32145675</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Код банка</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>1403 2102 5547 7965 </SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Дата выдачи док-та</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>27/08/2016</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Тип</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Супермаркет</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Почтовый индекс</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>100007</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Форма собственности</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>Не указан</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

            <SellerInformationBodyItem>
               <SellerInformationBodyItemLabel>Срок действия док-та</SellerInformationBodyItemLabel>
               <SellerInformationBodyItemValue>27/08/2026</SellerInformationBodyItemValue>
            </SellerInformationBodyItem>

         </SellerInformationBody>
      </SellerInformationContainer>
   );
}

export default SellerInformation;
