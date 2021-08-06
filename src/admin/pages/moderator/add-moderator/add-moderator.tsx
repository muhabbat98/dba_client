import React,{useState,useRef,useEffect} from 'react';
import ImgUpload from '../../../assets/images/upload-foto.svg'
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Checkbox from '../../../../components/checkbox';
import Password from '../../../../components/login/login-inputs/password';
import { useForm } from "react-hook-form";
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/arrow-down.svg'
import {ModalContainer,AddContainer,Title,UploadImg,SelectInput,SelectInputTitle,SelectBox,InputBody} from './style'
import { axios } from '../../../../hooks';

interface Propses {
      setClose:any;
      reff?:any;
}

const AddModerator: React.FC<Propses> = ({setClose,reff}) =>{
      const { register, handleSubmit, control, watch, errors, setValue } = useForm();
      const [avatar,setAvatar] = useState<any>(null);
      const [isOpen, setIsOpen] = useState<boolean>(false);
      const [errPassword,setErrPassword] = useState<boolean>(false);
      const [menu,setMenu] = useState<any>([]);
      const fileRef = useRef<HTMLInputElement>(null);
      const catList = new Array();
    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('catalog?parentId=');
            const data = await response.data;
            setMenu(data);
            // console.log(data)
            // setAllProduct(data);
        } catch (error) {
            // checkError(error);
        }
    };
      const onSubmit = (data: any) => {

            if(data.password==data.confirmPassword){
                  setClose(false);
                  console.log('dataa-->',data,catList);
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


    const collectCat = (item:string) =>{
        let incres=0;
        for(let i=0; i<catList.length; i++){
            if(catList[i]!=item) {
                incres++;}
        }
        if(incres==catList.length){
            catList.push(item);
        }
        console.log("ll--",catList)

      }

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
                              <div style={{display:"flex"}}>
                                    <div style={{flex:1}}>
                                          <div style={{margin:12}}>
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
                                                // style={{width:"100%"}}
                                                />
                                          </div>
                                          <div style={{margin:12}}>
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
                                          <div style={{margin:12}}>
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
                                    </div>
                                    <div style={{flex:1}}>
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
                                          <SelectInput ref={ref} onClick={()=>setIsOpen(true)}>
                                                <SelectInputTitle onClick={()=>setIsOpen(open=>!open)}>Категория</SelectInputTitle>
                                                <InputBody onClick={()=>setIsOpen(open=>!open)}><p>Электроника</p><ArrowIcon/></InputBody>
                                                {isOpen &&
                                                      <SelectBox>
                                                            {menu.map((item:any,index:number)=>{
                                                                  return( <div key={index} onClick={()=>collectCat(item.id)}>
                                                                        <Checkbox label={item.name}/>
                                                                  </div>)
                                                            })}


                                                      </SelectBox>
                                                }
                                          </SelectInput>
                                    </div>
                              </div>


                        <div style={{display:'flex',justifyContent: 'center'}}>
                              <Button style={{width:300}} type="submit" >Добавить</Button>
                        </div>
                        </form>
                  </AddContainer>
            </ModalContainer>
      );
}

export default AddModerator;
