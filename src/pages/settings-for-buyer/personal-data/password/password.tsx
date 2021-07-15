import { FC, useState } from 'react';
import PasswordChangeForm from './password-change-form';
import {
  Action,
  Caption,
  Content,
  LeftSide,
  RightSide,
  Row,
  Title,
} from '../style';
import { ReactComponent as Edit } from '../../../../assets/icons/edit.svg';

interface Props {}

const Password: FC<Props> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Row>
        <LeftSide>
          <Caption>Пароль</Caption>
          <Content>***********</Content>
        </LeftSide>
        <RightSide onClick={openModal}>
          <Action>
            <Edit />
            <Title>Изменить</Title>
          </Action>
        </RightSide>
      </Row>
      {open && <PasswordChangeForm closeModal={closeModal} />}
    </>
  );
};

export default Password;
