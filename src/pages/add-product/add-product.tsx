import React, { useEffect, useState } from 'react';
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


const AddProduct = () => {
  const { checkError } = useError();

  const [allProduct, setAllProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

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

  const openModalHandle = (id: string) => {
    setOpenModal(true);
    setId(id);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <AddProductContainer>
        {loading ? (
          <CircleLoader />
        ) : (
          <AddProductList>
            {openModal && (
              <AddProductModal itemId={id} modalClose={modalClose} />
            )}
            {allProduct.map((item: any) => (
              <AddProductItem
                onClick={() => openModalHandle(item.id)}
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
