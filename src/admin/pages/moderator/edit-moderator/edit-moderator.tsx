import React,{useState,useRef,useEffect} from 'react';
import ImgUpload from '../../../assets/images/upload-foto.svg'
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Checkbox from '../../../../components/checkbox';
import Password from '../../../../components/login/login-inputs/password';
import { useForm } from "react-hook-form";
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/arrow-down.svg'
import {
    ModalContainer,
    AddContainer,
    Title,
    UploadImg,
    SelectInput,
    SelectInputTitle,
    SelectBox,
    PassError,
    InputBody,
    CancelContainer
} from '../add-moderator/style';
import { axios } from '../../../../hooks';
import { ReactComponent as Cancel } from '../../../assets/icons/cancel.svg';

interface Propses {
    setClose?:any;
    reff?:any;
    editModeratorItem?:any;
    userItem:any;
    menu?:any
}

const EditModerator: React.FC<Propses> = ({setClose,reff,editModeratorItem,userItem,menu}) => {
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [avatar,setAvatar] = useState<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errPassword,setErrPassword] = useState<boolean>(false);
    const [selectList,setSelectList] = useState<any>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const [imgState, setImgState] = useState<any>(null);
    const [checked,setChecked] = useState<any>();

    let arr = new Array;
    useEffect(()=>{
        creatNewCheckedArray();
    },[])
    console.log('arr',checked);
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
        }
    }, [isOpen])

    const collectCat = (e:any) => {
        const {checked,name} = e.target;
        for(let i=0; i<menu.length; i++){
            if(menu[i].id==name&&checked==true){
                setSelectList([...selectList,name])
            }
            if(menu[i].id==name&&checked==false){
                for(let i=0; i<selectList.length; i++){
                    setSelectList(selectList.filter((item:any) => item !== name))
                }
            }
        }

    }

    const selectImage:any = () => {
        if(avatar){
            return <img src={avatar} alt='avatar'/>
        }else if(userItem.binaryImg){
            return  <img src={userItem.binaryImg} alt='avatar'/>
        }else{ return <img src={ImgUpload} alt='avatar'/> }
    }

    const creatNewCheckedArray = () => {
        const temp = userItem.item.categoryNames;
        for(let i=0; i<menu.length; i++){
            arr[i] = { id: menu[i].id, name: menu[i].name, checked: false };
        }
        for(let i=0; i<temp.length; i++) {
            arr.map((item: any) => {
                if ( temp[i].id == item.id) {
                    item.checked = true;
                }
            });
        }
        setChecked(arr);
    }
    return(
        <ModalContainer>
            <AddContainer ref={reff}>
                <CancelContainer onClick={()=>setClose(false)}><Cancel/></CancelContainer>
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
                        <div style={{marginTop:12,flex:1}}>
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
                                    {checked.map((item:any,index:number)=>{
                                        return(
                                            <div key={index}>
                                                <Checkbox
                                                    defaultChecked={item.checked}
                                                    label={item.name}
                                                    name={item.id}
                                                    onChange={(e:any)=>collectCat(e)}
                                                />
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
