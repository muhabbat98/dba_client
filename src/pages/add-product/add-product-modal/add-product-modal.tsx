import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Backdrop from '../../../components/backdrop';
import Button from '../../../components/button';
import CircleLoader from '../../../components/circle-loader';
import { axios, useError } from '../../../hooks';

import {
  AddProductModalContainer,
  BackButton,
  CloseButton,
  AddProductModalTop,
  AddProductModalTopLeft,
  AddProductModalTopRight,
  ProductIcon,
  ProductTitle,
  AddProductBreadcrumb,
  AddProductBreadcrumbItem,
  AddProductModalMenu,
  AddProductModalMenuItem,
  ProductOrder,
  ProductName,
  AddProductScroll,
} from './style';

import { ReactComponent as Back } from '../../../assets/icons/add-product-arrow-back.svg';
import { ReactComponent as Close } from '../../../assets/icons/ic_close.svg';
import { ReactComponent as ListIcon } from '../../../assets/icons/ic_tv.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface AddProductModalProps {
  itemId?: any;
  modalClose: () => void;
  categoryName: string;
}

const AddProductModal: FC<AddProductModalProps> = ({
  itemId,
  modalClose,
  categoryName,
}) => {
  const { checkError } = useError();
  const { push } = useHistory();
  const [width] = useWindowSize();

  const [menu, setMenu] = useState<any>(null);
  const [prevIds, setPrevIds] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<string>('');
  const [isSecond, setIsSecond] = useState<boolean>(false);
  const [breadcrumb, setBreadcrumb] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await getChildMenuItem();
    })();
  }, []);

  const getChildMenuItem = async (ids?: string, reFetch?: boolean) => {
    setLoading(true);
    let idd = ids || itemId;

    try {
      const response = await axios.get('catalog?parentId=' + idd);
      const data = await response.data;
      console.log('d => ', data);
      if (data.length > 0) {
        setMenu(data);

        if (!reFetch) {
          setPrevIds([...prevIds, idd]);
        }
        setCategoryId(idd);
      } else {
        const res = await axios.get(`/meta_data/products/${idd}`);
        const d = await res.data;
        if (d.length > 0) {
          setMenu(d);
          setIsSecond(true);
          if (!reFetch) {
            setPrevIds([...prevIds, idd]);
          }
        } else if (d.length == 0 && !isSecond) {
          setMenu([]);
          setPrevIds([...prevIds, idd]);
        } else {
          push('/seller/add-product-form/' + categoryId + '/' + idd);
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  };

  const setItemId = async (id: string) => {
    breadcrumbChange(id, false);
    await getChildMenuItem(id);
  };

  const backHandle = async () => {
    if (prevIds.length > 1) {
      let lastIds = [...prevIds];

      let removedId = lastIds.pop();
      breadcrumbChange(removedId, true);

      setPrevIds(lastIds);
      const lastIdd = lastIds[lastIds.length - 1];
      await getChildMenuItem(lastIdd, true);
    } else {
      closeModal();
    }
  };

  const closeModal = () => {
    modalClose();
  };

  const breadcrumbChange = (id: string, isRemoved?: boolean) => {
    if (menu && menu.length > 1) {
      if (!isRemoved) {
        for (let i = 0; i < menu.length; i++) {
          if (menu[i].id == id) {
            setBreadcrumb([...breadcrumb, menu[i].name]);
          }
        }
      } else {
        console.log('ssssssssssssss');
        // breadcrumb.pop();
        setBreadcrumb([...breadcrumb.slice(0, breadcrumb.length - 1)]);
      }
    } else {
      setBreadcrumb([...breadcrumb.slice(0, breadcrumb.length - 1)]);
    }
  };

  console.log('prevIds => ', prevIds);
  console.log('menu => ', menu);
  console.log('breadcrumb => ', breadcrumb);

  return (
    <>
      <Backdrop close={closeModal} />

      <AddProductModalContainer isLoading={isLoading}>
        {isLoading ? (
          <CircleLoader
            style={{ position: 'absolute', borderRadius: '16px' }}
          />
        ) : (
          <>
            <BackButton onClick={backHandle}>
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

                <ProductTitle>{categoryName}</ProductTitle>
              </AddProductModalTopLeft>

              {width >= 768 ? (
                <AddProductModalTopRight>
                  <Button>Добавить товар в эту категорию</Button>
                </AddProductModalTopRight>
              ) : null}
            </AddProductModalTop>

            <AddProductBreadcrumb>
              <AddProductBreadcrumbItem>
                {categoryName}
              </AddProductBreadcrumbItem>
              /
              {breadcrumb.length > 0 &&
                breadcrumb.map((item: any) => (
                  <AddProductBreadcrumbItem>{item} / </AddProductBreadcrumbItem>
                ))}
            </AddProductBreadcrumb>

            {width < 768 ? (
              <AddProductModalTopRight>
                <Button>Добавить товар в эту категорию</Button>
              </AddProductModalTopRight>
            ) : null}

            <AddProductScroll>
              <AddProductModalMenu>
                {menu.length > 0 ? (
                  menu.map((item: any, index: number) => (
                    <AddProductModalMenuItem
                      key={item.id}
                      onClick={() => setItemId(item.id)}
                    >
                      <ProductOrder>{index + 1}</ProductOrder>
                      <ProductName>{item.name}</ProductName>
                    </AddProductModalMenuItem>
                  ))
                ) : (
                  <h1 style={{ fontSize: '30px' }}>Здесь нет темплета!</h1>
                )}
              </AddProductModalMenu>
            </AddProductScroll>
          </>
        )}
      </AddProductModalContainer>
    </>
  );
};

export default AddProductModal;
