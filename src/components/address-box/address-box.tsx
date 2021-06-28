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
  SubDiv
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
  const [getAdderss,setGetAddres] = useState<any>(
   
  );
  const [data, setData] = useState({
    city: "",
    street: "",
    homeNumber: "",
    apartmentNumber: "",
    additionalInformation: "",
    country:"",
    district:""
  });
  const {register, watch,setValue,handleSubmit,errors} = useForm();
  let mainn:boolean;
  useEffect(() => {
    inputItems && setData(inputItems);
    console.log("working input--",inputItems)
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
  const onSubmit = (dataa: any) => {
    setData(dataa);
    mainn=chackboxdHide?false:main;
    getItems({ ...dataa, latitude:location&&location[0],longitude:location&&location[1], main });
    closeModal(false);
    // console.log("dataa------->", dataa)
    // console.log("Maindataa------->", data)
 }
 console.log("gggg--",location&&location[0])
//   console.log("lat-",inputItems&&inputItems.latitude,"long-",inputItems&&inputItems.longitude)
  return (
    <ModalContainer className="glass-container" onClick={clickHandler}>
      <Wrapper>
        <FormContainer>
          <Title
            style={{ textAlign: "center", marginTop: 0 }}
            title={modalTitle}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Страна"
              placeholder="Страна"
              name="country"
              defVal={data.country}
              register={register}
              setValue={setValue}
              watch={watch("country")}
              error={errors.country}
            />
            <Input
              label="Город"
              placeholder="Город"
              name="city"
              defVal={data.city}
              register={register}
              setValue={setValue}
              watch={watch("city")}
              error={errors.city}
            />
            <Input
              label="Район"
              placeholder="Район"
              name="district"
              defVal={data.district}
              register={register}
              setValue={setValue}
              watch={watch("district")}
              error={errors.district}
            />
            
            <Input
              label="Улица"
              placeholder="Улица"
              name="street"
              defVal={data.street}
              register={register}
              setValue={setValue}
              watch={watch("street")}
              error={errors.street}
            />
            <SubInputs>
              <SubDiv >
                <Input
                  placeholder="Дом"
                  label="Дом"
                  name="homeNumber"
                  defVal={data.homeNumber}
                  register={register}
                  setValue={setValue}
                  watch={watch("homeNumber")}
                  error={errors.homeNumber}
                />
              </SubDiv>
              <SubDiv>
                <Input
                  placeholder="Квартира"
                  label="Квартира"
                  name="apartmentNumber"
                  defVal={data.apartmentNumber}
                  register={register}
                  setValue={setValue}
                  watch={watch("apartmentNumber")}
                  error={errors.apartmentNumber}
                />
              </SubDiv>
            </SubInputs>
            <Input
              placeholder="Дополнительная информация"
              label="Дополнительная информация"
              name="additionalInformation"
              style={{height:100}}
              defVal={data.additionalInformation}
              register={register}
              setValue={setValue}
              watch={watch("additionalInformation")}
              error={errors.additionalInformation}
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

            <Button type="submit" >
              Сохранить
            </Button>
          </form>
        </FormContainer>
        <YMapContainer>
          <YandexMap 
            setLocation={setLocation} 
            setData={!inputItems?setData:setGetAddres} 
            defaultCordinate={
              inputItems && [inputItems.latitude,inputItems.longitude]
            } 
            />
        </YMapContainer>
      </Wrapper>
    </ModalContainer>
  );
};

export default AddressBox;
