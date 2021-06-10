import React, { useState } from "react";
import { useActionCreators } from "../../../../../../hooks";
import { ReactComponent as Pencil } from "../../../../../../assets/icons/pencil.svg";
import { ReactComponent as Trash } from "../../../../../../assets/icons/red-trash.svg";
import { ReactComponent as Btnhouse } from "../../../../../../assets/icons/house-btn.svg";
import { ReactComponent as DownArrow } from "../../../../../../assets/icons/down-arrow2.svg";
import {
  BorderBoxContainer,
  AddresTitiles,
  ActionsContainer,
  SecondContainer,
  Title,
  AddressInfo,
  Line,
  Arrow,
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
      {!openAddress ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AddresTitiles style={{ marginLeft: 0 }}>
            <p>Адрес {index}</p>
            <p>
              {data.district} район улица{" "}
              {data.street} <br />
              {data.apartmentNumber}-квартира {data.homeNumber}-дом
            </p>
          </AddresTitiles>
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
            <Arrow onClick={() => setOpenAddress((open) => !open)}>
              <DownArrow />
            </Arrow>
          </ActionsContainer>
        </div>
      ) : (
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
              <Arrow
                style={{ transform: "rotate(180deg)",transition:"0.3s"}}
                onClick={() => setOpenAddress((open) => !open)}
              >
                <DownArrow />
              </Arrow>
            </ActionsContainer>
          </div>
        </SecondContainer>
      )}
    </BorderBoxContainer>
  );
};

export default AddressBoxes;
