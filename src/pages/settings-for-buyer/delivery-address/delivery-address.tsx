import React, { useState, useEffect } from "react";
import { axios, useActionCreators, useSelector } from "../../../hooks";
import { AlertPosition } from "../../../utils/alert-position-enum";
import DefaultPage from "./addres-pages/default-page";
import ViewAddress from "./addres-pages/view-address-page";
import AddressBox from "../../../components/address-box";
const DeliveryAddress = () => {
  const [address, setAddress] = useState<any[] | null>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editItem, setEditItem] = useState();

  const { setAlertMessage } = useActionCreators();
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));

  const setGetAddItemHandler = (data: any) => {
    postAddress(data);
  };
  const setGetEditItemHandler = (data: any) => {
    editAddress(data);
  };
  const setMainAddresHandler = (id: any) => {
    editMainAddress(id);
  };

  const setDeleteitem = (id: any) => {
    deleteItem(id);
  }

  const handleStateChange = (state: boolean) => {
    getPersonalAddress(user.id);
  };


  useEffect(() => {
    getPersonalAddress(user.id);

  }, []);
  const getPersonalAddress = async (id: any) => {
    setAddress(null);
    try {
      const response = await axios.get(`/user/location/${id}`);
      const data = await response.data;
      setAddress(data);
      // console.log("getDataa---->", data);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      }
    }
  };

  const postAddress = async (getAddItems: any) => {
    const userId = user.id;
    try {
      const response = await axios.post("/user/location", {
        ...getAddItems,
        userId,
      });
      console.log('responseAdd-->', response);
      handleStateChange(response && true);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      }
    }
  };

  const editAddress = async (data: any) => {
    const userId = user.id;
    try {
      const response = await axios.put(`/user/location`, { ...data, userId });
      handleStateChange(response && true);
      // console.log('responseEdit-->',response);
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      }
    }
  };
  const editMainAddress = async (locationId: any) => {
    const userId = user.id;
    try {
      const response = await axios.put(`/user/location/make_main`, {
        userId,
        locationId,
      });
      handleStateChange(response && true);
      // console.log('responMain-->',response)
    } catch (error) {
      if (error.debugMessage) {
        setAlertMessage({
          message: error.debugMessage,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      } else {
        setAlertMessage({
          message: error.message,
          type: 'error',
          position: AlertPosition.TOP_LEFT
        });
      }
    }
  };

  const deleteItem = async (id: any) => {
    try {
      const response = await axios.delete(`/user/location/${id}`);
      handleStateChange(response && true);
      // console.log('responseDelete-->',response);
    }
    catch (error) {
      setAlertMessage({
        message: error.message,
        type: "error",
        position: AlertPosition.TOP_CENTER,
      });
    }
  };
  return (
    <div>
      {address && address.length > 0 ? (
        <ViewAddress
          data={address}
          openModal={setOpenModal}
          setEditItem={setEditItem}
          setOpenEditModal={setOpenEditModal}
          setMainAddresHandler={setMainAddresHandler}
          deleteItem={setDeleteitem}
        />
      ) : (
        <DefaultPage setOpen={setOpenModal} />
      )}
      {openModal && (
        <AddressBox
          closeModal={setOpenModal}
          modalTitle="Добавить новый адрес"
          getItems={setGetAddItemHandler}
        />
      )}

      {openEditModal && (
        <AddressBox
          closeModal={setOpenEditModal}
          modalTitle="Изменить адрес"
          inputItems={editItem}
          chackboxdHide={true}
          getItems={setGetEditItemHandler}
        />
      )}
    </div>
  );
};

export default DeliveryAddress;
