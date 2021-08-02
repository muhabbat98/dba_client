import React,{useState,useRef,useEffect} from 'react';
import ImgUpload from '../../../assets/images/upload-foto.svg'
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Checkbox from '../../../../components/checkbox';
import Password from '../../../../components/login/login-inputs/password';
import { useForm } from "react-hook-form";
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/arrow-down.svg'
import {ModalContainer,AddContainer,Title,UploadImg,SelectInput,SelectBox,InputBody} from './style'

interface Propses {
      setClose:any;
      reff?:any;
}

const AddModerator: React.FC<Propses> = ({setClose,reff}) =>{
      const { register, handleSubmit, control, watch, errors, setValue } = useForm();
      const [avatar,setAvatar] = useState<any>(null);
      const [isOpen, setIsOpen] = useState<boolean>(false);
      const [errPassword,setErrPassword] = useState<boolean>(false);
      const fileRef = useRef<HTMLInputElement>(null);
      const onSubmit = (data: any) => {
            
            if(data.password==data.confirmPassword){
                  setClose(false);
                  console.log('dataa-->',data);
            }
            else {
                  setErrPassword(true); 
                  console.log("password error")}
            
         }
         const imageChange = (ev:any) => {
            let imgFile = ev.target.files[0];
            const fileExt = imgFile.name.toLowerCase().split('.').pop();
            let reader = new FileReader();
            reader.onload = function () {
               setAvatar(reader.result);
            };
            reader.readAsDataURL(imgFile);
   
            const formData = new FormData();
            formData.append("file", imgFile);
   
      }
      const ref = useRef<any>()
      useEffect(() => {
            const checkIfClickedOutside = (e: any) => {
                  if (isOpen && ref.current && !ref.current.contains(e.target)) {
                        setIsOpen(false)
                  }
            }
            document.addEventListener("mousedown", checkIfClickedOutside)
            return () => {
                  document.removeEventListener("mousedown", checkIfClickedOutside)
            }
      }, [isOpen])
      const list = ["Электроника","Бытовая техника","Строительство и ремонт","Спорт и активный отдых","Одежда, обувь и аксесс","Книги, хобби, канцелярия","Продукты питания","Дача, сезонные товары","Товары для геймеров","Фандом атрибутика","Зоотовары","Красота и уход"]
      
      return(
            <ModalContainer>
                  <AddContainer ref={reff}>
                        <Title>Добавить модератор </Title>  
                        <UploadImg  >
                              <img src={avatar?avatar:ImgUpload}/>
                              <input 
                                    ref={fileRef} 
                                    type="file" 
                                    onChange={imageChange}/>
                        </UploadImg>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="firstName"
                              placeholder="Имя"
                              label="Имя"
                              // value={state.firstName}
                              // defVal={state.firstName}
                              inputType="letter"
                              watch={watch("firstName")}
                              error={errors.firstName}
                              register={register}
                              setValue={setValue}
                              />
                        </div>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="secondName"
                              label="Фамилия"
                              placeholder="Фамилия"
                              // defVal={state.secondName}
                              watch={watch("secondName")}
                              register={register}
                              inputType="letter"
                              error={errors.secondName}
                              setValue={setValue}
                              />
                        </div>
                        <div style={{marginBottom:16}}>
                              <Input
                              name="phoneNumber"
                              label="Телефон номер"
                              placeholder="Телефон номер"
                              // defVal={state.secondName}
                              watch={watch("phoneNumber")}
                              register={register}
                              inputType="phone"
                              error={errors.phoneNumber}
                              setValue={setValue}
                              />
                        </div>
                        <Password 
                              label="Пароль"
                              name="password"
                              register={register}
                              warning={errPassword}
                              />
                        <Password 
                              label="Повторите пароль"
                              name="confirmPassword"
                              register={register}
                              error={errPassword}
                              warning={errPassword}
                              />
                        <SelectInput ref={ref}>
                              <span onClick={()=>setIsOpen(open=>!open)}>Категория</span>
                              <InputBody onClick={()=>setIsOpen(open=>!open)}><p>Электроника</p><ArrowIcon/></InputBody>
                              {isOpen &&
                                    <SelectBox>
                                          {list.map((item:any,index:number)=>{
                                                return( <div key={index}>
                                                      <Checkbox/><p>{item}</p>
                                                </div>)
                                          })}
                                          
                                    
                                    </SelectBox>
                              }
                        </SelectInput>   
                        <Button type="submit" >Добавить</Button>
                        </form>
                  </AddContainer>
            </ModalContainer>
      );
}

export default AddModerator;