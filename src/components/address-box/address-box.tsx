import React, { useState, useEffect } from "react";
import YandexMap from "./yandex-map";
import Button from "../button";
import Title from "../products-title";
import Input from "../input";
import Checkbox from "../checkbox";
import {
  ModalContainer,
  Wrapper,
  FormContainer,
  YMapContainer,
  SubInputs,
} from "./style";

import { useForm } from "react-hook-form";
import { isConstructorDeclaration } from "typescript";

interface PropsModal {
  closeModal: any;
  modalTitle: string;
  getItems?: any; //get input values
  inputItems?: any; // Incoming information when edititng information
  chackboxdHide?: boolean; //chackbox hidden true || false
  locationPosition?: []; //map location items [43.23232,46.54543]
  
}
const AddressBox: React.FC<PropsModal> = ({
  closeModal,
  modalTitle,
  getItems,
  inputItems,
  chackboxdHide,
  locationPosition,
}) => {
  const [location, setLocation] = useState<any>();
  const [main, setMain] = useState(true);
  const [data, setData] = useState({
    city: "",
    street: "",
    homeNumber: "",
    apartmentNumber: "",
    additionalInformation: "",
  });
  let mainn:boolean;
  useEffect(() => {
    inputItems && setData(inputItems);
    
  }, []);
  
  const handleSubmitt = (e: any) => {
    e.preventDefault();
    mainn=chackboxdHide?false:main;
    getItems({ ...data, ...location, main });
    closeModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const clickHandler = (e: any) => {
    if (e.target.classList.contains("glass-container")) {
      closeModal(false);
    }
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  return (
    <ModalContainer className="glass-container" onClick={clickHandler}>
      <Wrapper>
        <FormContainer>
          <Title
            style={{ textAlign: "center", marginTop: 0 }}
            title={modalTitle}
          />
          <form>
            <Input
              label="Город"
              placeholder="Город"
              name="city"
              value={data.city}
              onChange={(e: any) => handleChange(e)}
            />
            <Input
              label="Улица"
              placeholder="Улица"
              name="street"
              value={data.street}
              onChange={(e: any) => handleChange(e)}
            />
            <SubInputs>
              <Input
                placeholder="Дом"
                label="Дом"
                name="homeNumber"
                value={data.homeNumber}
                onChange={(e: any) => handleChange(e)}
              />
              <Input
                placeholder="Квартира"
                label="Квартира"
                name="apartmentNumber"
                value={data.apartmentNumber}
                onChange={(e: any) => handleChange(e)}
              />
            </SubInputs>
            <Input
              placeholder="Дополнительная информация"
              label="Дополнительная информация"
              name="additionalInformation"
              value={data.additionalInformation}
              onChange={(e: any) => handleChange(e)}
            />
            {!chackboxdHide && (
              <Checkbox
                label="Сделать основным адресом"
                name="important"
                defaultChecked={true}
                // value={data.important}
                onChange={(e: any) => setMain(e.target.checked)}
              />
            )}

            <Button type="submit" onClick={handleSubmitt}>
              Сохранить
            </Button>
          </form>
        </FormContainer>
        <YMapContainer>
          <YandexMap setLocation={setLocation} />
        </YMapContainer>
      </Wrapper>
    </ModalContainer>
  );
};

export default AddressBox;
