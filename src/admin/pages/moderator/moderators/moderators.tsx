import React, { useEffect, useState } from 'react';
import { axios, useActionCreators } from '../../../../hooks';
import StepLoader from '../../../components/step-loader';
import Toggle from '../../../components/toggle';
import {
  ModeratorsContainer,
  Title,
  ModeratorsList,
  ModeratorsItem,
  Login,
  Name,
  No,
  Surname,
  Actions,
  DeleteContainer,
} from './style';

import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';

const Moderators = () => {
  const [moderators, setModerators] = useState([]);
  const {
    startLoading,
    endLoading,
    error,
    setSnackbarMessage,
    cleanConfirm,
    setConfirm,
  } = useActionCreators();

  const fetchModerators = async (isRefetch: boolean) => {
    try {
      isRefetch && startLoading();
      const respone = await axios.get('/moderators');
      const data = await respone.data;
      setModerators(data);
      isRefetch && endLoading();
    } catch (e) {
      isRefetch
        ? error('Что-то пошло не так!')
        : setSnackbarMessage({
            message: e.message,
            type: 'error',
          });
    }
  };

  const disableHandler = async (e: any, id: string) => {
    const active = e.target.value === 'false' ? true : false;
    try {
      const respone = await axios.put('/moderator', {
        id: id,
        isActive: active,
      });
      const data = await respone.data;
      fetchModerators(false);
    } catch (e) {
      setSnackbarMessage({
        message: e.message,
        type: 'error',
      });
    }
  };

  const deleteHandler = async (m: any) => {
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить этого модератора.
          <p>
            <b>
              {m.firstName} {m.secondName}
            </b>
          </p>
        </>
      ),
      callback: async () => {
        try {
          const respone = await axios.delete(`/moderator/${m.id}`);
          const data = await respone.data;
          cleanConfirm();
          setSnackbarMessage({
            message: data.message,
            type: 'success',
          });
          fetchModerators(false);
        } catch (e) {
          setSnackbarMessage({
            message: e.message,
            type: 'error',
          });
        }
      },
    });
  };

  useEffect(() => {
    fetchModerators(true);
  }, []);

  return (
    <ModeratorsContainer>
      <StepLoader />
      <Title>Модераторы</Title>
      <ModeratorsList>
        <ModeratorsItem>
          <No>
            <b> № </b>
          </No>
          <Name>
            <b>Имя</b>
          </Name>
          <Surname>
            <b> Фамилия </b>
          </Surname>
          <Login>
            <b>Логин</b>
          </Login>
          <Actions></Actions>
        </ModeratorsItem>
        {moderators.map((m: any, i: number) => (
          <ModeratorsItem key={m.id}>
            <No>{i + 1}</No>
            <Name>{m.firstName}</Name>
            <Surname>{m.secondName}</Surname>
            <Login>{m.username}</Login>
            <Actions>
              <DeleteContainer onClick={() => deleteHandler(m)}>
                <Delete />
              </DeleteContainer>
              <Toggle
                id={m.id}
                onChange={(e: any) => disableHandler(e, m.id)}
                //checked={m.isActive}
                value={m.isActive}
                checked={m.isActive}
              />
            </Actions>
          </ModeratorsItem>
        ))}
      </ModeratorsList>
    </ModeratorsContainer>
  );
};

export default Moderators;
