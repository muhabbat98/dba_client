import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axios, useError } from '../../hooks';
import CircleLoader from '../../components/circle-loader';
import Container from '../../components/grid/container';
import AddProductModal from './add-product-modal';
import { ReactComponent as ListIcon } from '../../assets/icons/ic_tv.svg';
import {
  AddProductContainer,
  AddProductList,
  AddProductItem,
  ItemText,
} from './style';
import AddProductPage from './add-product-page';

const AddProduct = () => {
  const { checkError } = useError();
  const { push } = useHistory();

  const [allProduct, setAllProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get('catalog?parentId=');
      const data = await response.data;
      setAllProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  };

  const pageClickHandle = (id: string) => {
    push(`add-product-page/${id}`);
  };

  // const openModalHandle = (id: string) => {
  //   setOpenModal(true);
  //   for (let i = 0; i < allProduct.length; i++) {
  //     if (allProduct[i].id == id) {
  //       setCategoryName(allProduct[i].name);
  //     }
  //   }
  //   setId(id);
  // };

  // const modalClose = () => {
  //   setOpenModal(false);
  // };

  return (
    <Container>
      <AddProductContainer>
        {loading ? (
          <CircleLoader />
        ) : (
          <AddProductList>
            {/* {openModal && (
              <AddProductModal
                categoryName={categoryName}
                itemId={id}
                modalClose={modalClose}
              />
            )} */}
            {/* <AddProductPage categoryName={categoryName} id={id} /> */}
            {allProduct.map((item: any) => (
              <AddProductItem
                onClick={() => pageClickHandle(item.id)}
                // onClick={() => openModalHandle(item.id)}
                key={item.id}
              >
                <ListIcon />
                <ItemText>{item.name}</ItemText>
              </AddProductItem>
            ))}
          </AddProductList>
        )}
      </AddProductContainer>
    </Container>
  );
};

export default AddProduct;
