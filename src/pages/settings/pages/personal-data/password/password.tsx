import React, { FC } from "react";
import {
  Action,
  Caption,
  Content,
  LeftSide,
  RightSide,
  Row,
  Title,
} from "../style";
import { ReactComponent as Edit } from "../../../../../assets/icons/edit.svg";

interface Props {}

const Password: FC<Props> = ({}) => {
  return (
    <Row>
      <LeftSide>
        <Caption>Пароль</Caption>
        <Content>***********</Content>
      </LeftSide>
      <RightSide>
        <Action>
          <Edit />
          <Title>Изменить</Title>
        </Action>
      </RightSide>
    </Row>
  );
};

export default Password;
