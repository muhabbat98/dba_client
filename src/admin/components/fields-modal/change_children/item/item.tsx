import React from 'react';
import { ItemContainer } from './style';
import { axios, useActionCreators } from '../../../../../hooks';
import { ReactComponent as Delete } from '../../../../assets/icons/delete.svg';

interface ItemProps {
  item: any;
  num: number;
  close: () => void;
  fetchMenu: () => void;
}

const Item: React.FC<ItemProps> = ({ item, num, close, fetchMenu }) => {
  const { setSnackbarMessage, cleanConfirm, setConfirm } = useActionCreators();
  console.log(item);

  const deleteItem = async () => {
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить.
          <p>
            <b>{item.name}</b>
          </p>
        </>
      ),
      callback: async () => {
        try {
          const respone = await axios.delete(`/category/${item.id}`);
          const data = await respone.data;
          if (respone.status === 200) {
            cleanConfirm();
            close();
            setSnackbarMessage({
              message: data.message,
              type: 'success',
            });
            fetchMenu();
          }
        } catch (error) {
          setSnackbarMessage({
            message: error.message,
            type: 'error',
          });
        }
      },
    });
  };

  return (
    <ItemContainer>
      <div>
        <span>{num + 1}. </span>
        {item.name}
      </div>
      <div onClick={() => deleteItem()}>
        <Delete />
      </div>
    </ItemContainer>
  );
};

export default Item;
