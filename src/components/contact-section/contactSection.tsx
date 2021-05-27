import React from 'react';
import Container from '../grid/container';
import Input from '../input';
import { ReactComponent as Arrow } from './arrow.svg';
import { ContactSectionWtrapper } from './style';
export default function ContactSection() {
  return (
    <Container>
      <ContactSectionWtrapper>
        <div>
          <h3>
            Будьте в курсе скидок на электронику, товары для детей и для дома
          </h3>
          <p>
            Нажимая «Подписаться», я соглашаюсь получать рекламные и иные
            маркетинговые сообщения от ООО «marketpalce» на условиях Политики
            конфиденциальности и Пользовательского соглашения.
          </p>
        </div>
        <div>
          <Input label='Email' type='emai' placeholder='Введите ваш e-mail' />
          <div>
            <Arrow />
          </div>
        </div>
      </ContactSectionWtrapper>
    </Container>
  );
}
