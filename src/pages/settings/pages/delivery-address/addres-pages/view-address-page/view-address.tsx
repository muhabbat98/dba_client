import React, { useState, useEffect } from "react";
import { axios, useActionCreators, useSelector } from "../../../../../../hooks";
import { AlertPosition } from "../../../../../../utils/alert-position-enum";
import Title from "../../../../../../components/products-title";
import Button from "../../../../../../components/button";
import CircleLoader from "../../../../../../components/circle-loader";
import AddressBoxes from "../address-boxes";
import { useRole } from '../../../../../../hooks';
import { ReactComponent as House1 } from "../../../../../../assets/icons/house-1.svg";
import { ReactComponent as Pencil } from "../../../../../../assets/icons/pencil.svg";
import { ReactComponent as Trash } from "../../../../../../assets/icons/red-trash.svg";
import { ReactComponent as Btnhouse } from "../../../../../../assets/icons/house-btn.svg";
import { ReactComponent as PlusIcon } from "../../../../../../assets/icons/plusIcon.svg";
import {
  ViewAddressContainer,
  BorderBoxContainer,
  HouseCircle,
  AddresTitiles,
  ActionsContainer,
  PlusButton,
  SecondContainer,
  Titlee,
  AddressInfo,
  Line

} from "./style";

interface Addresses {
  data: any;
  openModal: any;
  setEditItem: any;
  setOpenEditModal: any;
  setMainAddresHandler: any;
  deleteItem:any
}

const ViewAddress: React.FC<Addresses> = ({
  data,
  openModal,
  setEditItem,
  setOpenEditModal,
  setMainAddresHandler,
  deleteItem
}) => {
  const { setAlertMessage, setConfirm, cleanConfirm } = useActionCreators();

  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  const isBuyer = useRole();
  let main=data;
  let multi=data;
  let mainAddress = main.find((item: any) => item.main == true);
  let addresses = multi.filter((item: any) => item.main !== true);

  const editHandle = () => {
    setEditItem(mainAddress);
    setOpenEditModal(true);
  };

  const handleDelete = (id: string) => {
    setConfirm({
      message: "Вы хотите удалить данные?",
      callback: () => {
        try {
          deleteItem(id);
          cleanConfirm();
        } catch (error) {}
      },
    });
  };
  
  
  // console.log('mainAddress--',mainAddress);
  // console.log('addresses--',addresses);
  return (
    <ViewAddressContainer isLoading={data ? false : true}>
      { !data?
        <CircleLoader style={{position:"absolute"}}/>
      :<>
        {mainAddress && (
          <>
            <Title title="Основной адрес" style={{ marginTop: 0 }} />
            <BorderBox>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <HouseCircle>
                    <House1 />
                  </HouseCircle>
                  <AddresTitiles>
                    <p>Адрес 1</p>
                    
                  </AddresTitiles>
                </div>
                
              </div>
            <div>
              <Title>Адрес 1</Title>
              <AddressInfo>
                <div>
                  <p>Страна</p>
                  <h5>{mainAddress.country}</h5>
                </div>
                <div>
                  <p>Город</p>
                  <h5>{mainAddress.city}</h5>
                </div>
                <div>
                  <p>Район</p>
                  <h5>{mainAddress.district}</h5>
                </div>
                <div>
                  <p>Улица</p>
                  <h5>{mainAddress.street}</h5>
                </div>
                <div>
                  <p>Доп. информация</p>
                  <h5>{mainAddress.additionalInformation}</h5>
                </div>
                <div>
                  <p>Дом</p>
                  <h5>{mainAddress.apartmentNumber}</h5>
                </div>
                <div>
                  <p>Квартира</p>
                  <h5>{mainAddress.homeNumber}</h5>
                </div>
                {!isBuyer.isBuyer && 
                  <div>
                    <p>Почтовый индекс</p>
                    <h5>1234567</h5>
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
                  
                  <div onClick={editHandle}>
                    <Pencil />
                    <span>Изменить</span>
                  </div>
                  <div onClick={() => handleDelete(mainAddress.id)}>
                    <Trash />
                    <span>Удалить</span>
                  </div>
                
                </ActionsContainer>
              </div>
          </div>
          
          
          </BorderBox>
          </>
        )}

        {addresses.length ? <Title title="Дополнительные адреса" /> : <></>}
        {addresses &&
          addresses.map((data: any, index: number) => {
            return (
              <AddressBoxes
                deleteItem={deleteItem}
                key={data.id}
                setEditItem={setEditItem}
                setOpenEditModal={setOpenEditModal}
                data={data}
                setMainAddresHandler={setMainAddresHandler}
                index={mainAddress ? index + 2 : index + 1}
              />
            );
          })}
        <PlusButton>
          <Button
            onClick={() => {
              openModal(true);
            }}
          >
            <div>
              <PlusIcon />
              Добавить адрес
            </div>
          </Button>
        </PlusButton>
      </>
      }
    </ViewAddressContainer>
  );
};

export default ViewAddress;

const BorderBox: React.FC = ({ children }) => {
  return <BorderBoxContainer>{children}</BorderBoxContainer>;
};
