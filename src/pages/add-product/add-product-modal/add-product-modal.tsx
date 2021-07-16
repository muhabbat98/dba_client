import React, { FC, useState, useEffect } from 'react';

import {
  AddProductModalContainer, BackButton, CloseButton, AddProductModalTop, AddProductModalTopLeft,
  AddProductModalTopRight, ProductIcon, ProductTitle, AddProductBreadcrumb, AddProductModalMenu,
  AddProductModalMenuItem, ProductOrder, ProductName
} from './style';

import { ReactComponent as Back } from '../../../assets/icons/add-product-arrow-back.svg';
import { ReactComponent as Close } from '../../../assets/icons/ic_close.svg';
import { ReactComponent as ListIcon } from '../../../assets/icons/ic_tv.svg';

import Backdrop from '../../../components/backdrop';
import Button from '../../../components/button';
import { axios, useError } from '../../../hooks';

import CircleLoader from '../../../components/circle-loader';


interface AddProductModalProps {
  itemId?: any,
  modalClose: () => void
}

const AddProductModal: FC<AddProductModalProps> = ({ itemId, modalClose }) => {
  const { checkError } = useError();

  const [menu, setMenu] = useState<any>(null);
  const [id, setId] = useState<any>(itemId);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getChildMenuItem();
  }, [id]);

  const getChildMenuItem = async () => {
    setLoading(true);
    try {
      const response = await axios.get('catalog?parentId=' + id);
      const data = await response.data;
      setMenu(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  }

  const closeModal = () => {
    modalClose();
  }

  return (
    <>
      <Backdrop close={closeModal} />

      <AddProductModalContainer isLoading={isLoading}>
        {
          isLoading ? <CircleLoader style={{ position: 'absolute' }} /> : (
            <>
              <BackButton>
                <Back />
              </BackButton>

              <CloseButton onClick={closeModal}>
                <Close />
              </CloseButton>

              <AddProductModalTop>
                <AddProductModalTopLeft>
                  <ProductIcon>
                    <ListIcon />
                  </ProductIcon>

                  <ProductTitle>Электроника</ProductTitle>
                </AddProductModalTopLeft>

                <AddProductModalTopRight>
                  <Button >Добавить товар в эту категорию</Button>
                </AddProductModalTopRight>
              </AddProductModalTop>

              <AddProductBreadcrumb>Мобильные телефоны и аксессуары</AddProductBreadcrumb>

              <AddProductModalMenu>
                {
                  menu && menu.map((item: any, index: number) => (
                    <AddProductModalMenuItem key={item.id} onClick={() => setId(item.id)}>
                      <ProductOrder>{index + 1}</ProductOrder><ProductName>{item.name}</ProductName>
                    </AddProductModalMenuItem>)
                  )
                }
              </AddProductModalMenu>
            </>
          )
        }

      </AddProductModalContainer>

      {/* {
        (menu && menu.length > 0) && 
      } */}
    </>
  );
};

export default AddProductModal;
