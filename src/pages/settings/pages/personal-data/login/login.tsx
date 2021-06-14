import { FC, useState } from 'react';
import LoginChangeForm from './login-change-form';
import {
  Row,
  LeftSide,
  RightSide,
  Action,
  Title,
  Caption,
  Content,
} from '../style';

import { ReactComponent as Edit } from '../../../../../assets/icons/edit.svg';

interface Props {
  phoneNumber: string;
}

const Login: FC<Props> = ({ phoneNumber }) => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Row>
        <LeftSide>
          <Caption>Логин</Caption>
          <Content>{phoneNumber}</Content>
        </LeftSide>
        <RightSide onClick={openModal}>
          <Action>
            <Edit />
            <Title>Изменить</Title>
          </Action>
        </RightSide>
      </Row>
      {open && <LoginChangeForm closeModal={closeModal} />}
    </>
  );
};

export default Login;
