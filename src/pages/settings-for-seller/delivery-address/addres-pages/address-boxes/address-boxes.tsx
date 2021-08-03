import React, { useState } from "react";
import { useRole, useActionCreators } from '../../../../../hooks';
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { ReactComponent as Pencil } from "../../../../../assets/icons/pencil.svg";
import { ReactComponent as Trash } from "../../../../../assets/icons/red-trash.svg";
import { ReactComponent as Btnhouse } from "../../../../../assets/icons/house-btn.svg";
import { ReactComponent as BlueArrow } from "../../../../../assets/icons/blueArrow.svg";
import { ReactComponent as PlusIcon } from '../../../../../assets/icons/plusIcon.svg';
import {
  BorderBoxContainer,
  MobileDescription,
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
  const [width,height] = useWindowSize();
  const [openInfo,setOpenInfo] = useState(false);
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
        } catch (error) { }
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
        } catch (error) { }
      },
    });
  };

  return (
    <BorderBoxContainer>

      <SecondContainer>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Title>Адрес {index}</Title>
          {width<768 &&  
          <Btnhouse 
            onClick={handleExit} 
            style={{cursor: 'pointer'}}/>}
        </div>
        {width<768 &&
          <MobileDescription>{data.city} район,улица {data.street}, {data.apartmentNumber}-дом, 
          {data.homeNumber}-квартира</MobileDescription>
        }
        {openInfo||width>768 ?
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
              <h5>{data.district.replace(/район/g,"")}</h5>
            </div>
            <div>
              <p>Улица</p>
              <h5>{data.street.replace(/улица/g,"")}</h5>
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
        :<></>}
        {width>768 &&
          <Line></Line>
        }
        
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
              {width>346 &&
                <span>Изменить</span>
              }
            </div>
            <div onClick={() => handleDelete()}>
              <Trash />
              {width>346 &&
                <span>Удалить</span>
              }
            </div>
            <div onClick={()=>setOpenInfo(open=>!open)}>
              <BlueArrow style={{transform:openInfo?"rotate(180deg)":"rotate(0deg)" }}/>
            </div>

          </ActionsContainer>
        </div>
      </SecondContainer>

    </BorderBoxContainer>
  );
};

export default AddressBoxes;
