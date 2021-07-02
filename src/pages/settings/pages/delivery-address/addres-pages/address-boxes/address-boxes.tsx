import React, { useState } from "react";
import { useActionCreators } from "../../../../../../hooks";
import { useRole } from '../../../../../../hooks';
import { ReactComponent as Pencil } from "../../../../../../assets/icons/pencil.svg";
import { ReactComponent as Trash } from "../../../../../../assets/icons/red-trash.svg";
import { ReactComponent as Btnhouse } from "../../../../../../assets/icons/house-btn.svg";
import {
  BorderBoxContainer,
  AddresTitiles,
  ActionsContainer,
  SecondContainer,
  Title,
  AddressInfo,
  Line,
} from "./style";

interface Propses {
  data: any;
  index: number;
  setEditItem: any;
  setOpenEditModal: any;
  deleteItem: any;
  setMainAddresHandler: any;

}

const AddressBoxes: React.FC<Propses> = ({
  data,
  index,
  setEditItem,
  setOpenEditModal,
  deleteItem,
  setMainAddresHandler,
}) => {
  const [openAddress, setOpenAddress] = useState(false);

  const handleEditButton = () => {
    setOpenEditModal(true);
    setEditItem(data);
  };
  const { setConfirm, cleanConfirm } = useActionCreators();
  const isBuyer = useRole();
  const handleExit = () => {
    setConfirm({
      message: "Вы хотите этот адрес сделать основным?",
      callback: () => {
        try {
          setMainAddresHandler(data.id);
          cleanConfirm();
        } catch (error) {}
      },
    });
  };

  const handleDelete = () => {
    setConfirm({
      message: "Вы хотите удалить данные?",
      callback: () => {
        try {
          deleteItem(data.id);
          cleanConfirm();
        } catch (error) {}
      },
    });
  };

  return (
    <BorderBoxContainer>
     
        <SecondContainer>
          <Title>Адрес {index}</Title>
          <AddressInfo>
            <div>
              <p>Страна</p>
              <h5>{data.country}</h5>
            </div>
            <div>
              <p>Город</p>
              <h5>{data.city}</h5>
            </div>
            <div>
              <p>Район</p>
              <h5>{data.district}</h5>
            </div>
            <div>
              <p>Улица</p>
              <h5>{data.street}</h5>
            </div>
            <div>
              <p>Доп. информация</p>
              <h5>{data.additionalInformation}</h5>
            </div>
            <div>
              <p>Дом</p>
              <h5>{data.apartmentNumber}</h5>
            </div>
            <div>
              <p>Квартира</p>
              <h5>{data.homeNumber}</h5>
            </div>
            {!isBuyer.isBuyer && 
              <div>
                <p>Почтовый индекс</p>
                <h5>{data.postcode}</h5>
              </div>
            }
          </AddressInfo>
          <Line></Line>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 25,
            }}
          >
            <ActionsContainer>
              <div onClick={handleExit}>
                <Btnhouse />
                <span>Сделать основной</span>
              </div>
              <div onClick={handleEditButton}>
                <Pencil />
                <span>Изменить</span>
              </div>
              <div onClick={() => handleDelete()}>
                <Trash />
                <span>Удалить</span>
              </div>
             
            </ActionsContainer>
          </div>
        </SecondContainer>
     
    </BorderBoxContainer>
  );
};

export default AddressBoxes;
