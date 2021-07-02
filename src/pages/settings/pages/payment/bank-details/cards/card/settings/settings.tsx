import React, { useEffect } from 'react';
import { ReactComponent as DeleteIcon } from '../../../../../../../../assets/icons/delete.svg';
import Checkbox from '../../../../../../../../components/checkbox';
import { axios, useActionCreators } from '../../../../../../../../hooks';
import { SettingsContainer, Menu, MenuItem, Title, Title1 } from './style';

interface Props {
  open: boolean;
  closeSettings: () => void;
  id: string;
  cardNumber: string;
  isMain: boolean;
}

const Settings: React.FC<Props> = ({
  open,
  closeSettings,
  id,
  cardNumber,
  isMain,
}) => {
  const { setConfirm, cleanConfirm, setAlertMessage, fetchAllcards } =
    useActionCreators();

  useEffect(() => {
    if (open) {
      window.addEventListener('click', clickHandler);
    } else {
      window.removeEventListener('click', clickHandler);
    }

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, [open]);

  const clickHandler = (e: any) => {
    if (e.target.classList.contains(id)) {
      return;
    } else {
      closeSettings();
    }
  };

  const deleteCard = () => {
    setConfirm({
      message: (
        <>
          <div>
            Bы действительно хотите удалить эту карту: <div>{cardNumber}</div>
          </div>
        </>
      ),
      callback: async () => {
        try {
          const response = await axios.delete(`/user/card?cardId=${id}`);
          const data = await response;
          setAlertMessage({
            message: data.data.message,
            type: 'success',
          });
          fetchAllcards(true);
          cleanConfirm();
        } catch (error) {
          if (error.debugMessage) {
            setAlertMessage({
              message: error.debugMessage,
              type: 'error',
            });
          } else {
            setAlertMessage({
              message: error.message,
              type: 'error',
            });
          }
        }
      },
    });
  };

  const makeCardMain = async () => {
    try {
      const response = await axios.put(`/user/card?cardId=${id}`);
      fetchAllcards(true);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
        });
      }
    }
  };

  return open ? (
    <SettingsContainer className={id} open={open}>
      <Menu>
        <MenuItem onClick={makeCardMain}>
          <Checkbox checked={isMain} />
          <Title1>Сделать основной</Title1>
        </MenuItem>
        <MenuItem onClick={deleteCard}>
          <DeleteIcon />
          <Title>Удалить</Title>
        </MenuItem>
      </Menu>
    </SettingsContainer>
  ) : null;
};

export default Settings;
