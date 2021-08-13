import React,{useState,useRef,useEffect} from 'react';
import ImgUpload from '../../../assets/images/upload-foto.svg'
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Checkbox from '../../../../components/checkbox';
import Password from '../../../../components/login/login-inputs/password';
import { useForm } from "react-hook-form";
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/arrow-down.svg'
import {ModalContainer,AddContainer,Title,UploadImg,SelectInput,SelectInputTitle,SelectBox,PassError,InputBody} from '../add-moderator/style'
import { axios } from '../../../../hooks';

interface Propses {
    setClose?:any;
    reff?:any;
    editModeratorItem?:any;
    userItem:any;
}

const EditModerator: React.FC<Propses> = ({setClose,reff,editModeratorItem,userItem}) => {
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [avatar,setAvatar] = useState<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errPassword,setErrPassword] = useState<boolean>(false);
    const [menu,setMenu] = useState<any>([]);
    const [selectList,setSelectList] = useState<any>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const[imgState, setImgState] = useState<any>(null);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('catalog?parentId=');
            const data = await response.data;
            setMenu(data);

        } catch (error) {
            console.log(error);
        }
    };
    const onSubmit = (data: any) => {
        console.log("data=>  ", imgState);

        const formData = new FormData();


        if (data.password == data.confirmPassword) {
            setClose(false);
            formData.append("image", imgState?imgState:null);
            formData.append("firstName", data.firstName);
            formData.append("secondName", data.secondName);
            formData.append("phoneNumber", data.phoneNumber);
            // formData.append("password", data.confirmPassword);
            formData.append("categoryIds", selectList);
            formData.append("id", userItem.item.id);
            editModeratorItem(formData)
        } else {
            setErrPassword(true);
            console.log("password error")
        }


    }
    const imageChange = (ev:any) => {
        let imgFile = ev.target.files[0];
        setImgState(imgFile);


        const fileExt = imgFile.name.toLowerCase().split('.').pop();

        let reader = new FileReader();
        reader.onload = function () {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(imgFile);
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
        }}, [isOpen])


    const collectCat = (item:string) =>{
        let increment=0;
        for(let i=0; i<selectList.length; i++){
            if(selectList[i]!=item) {
                increment++;}
        }
        if(increment == selectList.length){
            setSelectList([...selectList,item])
        }

    }
    const selectImage:any = () => {
        if(avatar){
            return <img src={avatar} alt='avatar'/>
        }else if(userItem.binaryImg){
            return  <img src={userItem.binaryImg} alt='avatar'/>
        }else{ return <img src={ImgUpload} alt='avatar'/> }
    }
    return(
        <ModalContainer>
            <AddContainer ref={reff}>
                <Title>Изменить модератор </Title>
                {/*{userItem.firstName}*/}
                <UploadImg >
                    {selectImage()}
                    <input
                        ref={fileRef}
                        type="file"
                        onChange={imageChange}/>
                </UploadImg>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display:'flex'}}>
                        <div style={{margin:"12px 12px 12px 0px",flex:1}}>
                            <Input
                                name="firstName"
                                placeholder="Имя"
                                label="Имя"
                                // value={state.firstName}
                                defVal={userItem.item.firstName}
                                inputType="letter"
                                watch={watch("firstName")}
                                error={errors.firstName}
                                register={register}
                                setValue={setValue}
                                // style={{width:"100%"}}
                            />
                        </div>
                        <div style={{flex:1}}>
                            <Password
                                label="Пароль"
                                name="password"
                                register={register}
                                warning={errPassword}
                            />
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{margin:"12px 12px 12px 0px",flex:1}}>
                            <Input
                                name="secondName"
                                label="Фамилия"
                                placeholder="Фамилия"
                                defVal={userItem.item.secondName}
                                watch={watch("secondName")}
                                register={register}
                                inputType="letter"
                                error={errors.secondName}
                                setValue={setValue}
                            />
                        </div>
                        <div style={{flex:1}}>
                            <Password
                                label="Повторите пароль"
                                name="confirmPassword"
                                register={register}
                                error={errPassword}
                                warning={errPassword}
                            />
                            {errPassword && <PassError>Пароль введен неверно</PassError>}
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{margin:"12px 12px 12px 0px",flex:1}}>
                            <Input
                                name="phoneNumber"
                                label="Телефон номер"
                                placeholder="Телефон номер"
                                defVal={userItem.item.phoneNumber}
                                watch={watch("phoneNumber")}
                                register={register}
                                inputType="phone"
                                error={errors.phoneNumber}
                                setValue={setValue}
                            />
                        </div>
                        <div style={{flex:1,marginTop:12}}>
                            <SelectInput ref={ref} onClick={()=>setIsOpen(true)}>
                                <SelectInputTitle onClick={()=>setIsOpen(open=>!open)}>Категория</SelectInputTitle>
                                <InputBody onClick={()=>setIsOpen(open=>!open)}><p>Электроника</p><ArrowIcon/></InputBody>
                                {isOpen &&
                                <SelectBox>
                                    {menu.map((item:any,index:number)=>{
                                        return(
                                            <div key={index} onClick={()=>collectCat(item.id)}>
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
export default EditModerator;
