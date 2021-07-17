import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/grid/container';
import { Erro404Container, ErrorTitle, ErrorDefination } from './style';

import { ReactComponent as ErrorIcon } from '../../assets/icons/404-error.svg';
import Button from '../button';

const Erro404 = () => {

   const { push } = useHistory();

   const goHome = () => {
      push("/");
   }

   return (
      <Container>
         <Erro404Container>
            <ErrorIcon />
            <ErrorTitle>Страница не найдена</ErrorTitle>
            <ErrorDefination>Сожалеем, запрошенная страница не может быть найдена.
               Вернитесь на главную страницу</ErrorDefination>
            <Button onClick={goHome}>Перейти в главного</Button>
         </Erro404Container>
      </Container>
   )
}

export default Erro404
