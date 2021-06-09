import React, { FC } from "react";
import {
  Row,
  LeftSide,
  RightSide,
  Action,
  Title,
  Caption,
  Content,
} from "../style";

import { ReactComponent as Edit } from "../../../../../assets/icons/edit.svg";

interface Props {
  phoneNumber: string;
}

const Login: FC<Props> = ({ phoneNumber }) => {
  return (
    <Row>
      <LeftSide>
        <Caption>Логин</Caption>
        <Content>{phoneNumber}</Content>
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

export default Login;
