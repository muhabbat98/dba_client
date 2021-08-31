import React,{useState,useRef,useEffect} from 'react';
import { axios, useActionCreators, useError } from '../../../hooks';
import { ReactComponent as DostsIcon } from '../../assets/icons/dots-icon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash-black.svg'
import DefUSer from '../../assets/images/defaultUser.svg'
import Avatar from '../../assets/images/avatarr.svg'
import {
      CardWraper,
      ActionBtn,
      CardBox,
      AvatarImg,
      NameTitle,
      PhoneNumber,
      RoleTitle ,
      RoleTags,
      Tag,
      Actions  
} from './style'
import SimpleInput from '../../../components/simple-input';


interface Propses{
    item?:any;
    refreshModerator:any;
    setUserItem:any;
    setOpenModal:any;
}

const ModeratorCard:React.FC<Propses> = ({item,refreshModerator,setUserItem,setOpenModal}) => {
      const { setAlertMessage, setConfirm, cleanConfirm } = useActionCreators();
      const [open,setOpen] = useState<boolean>(false);
      const [binaryImage,setBinaryImage] = useState<any>(null);
      const [contentType, setContentType] = useState<any>(null);
      const {checkError} = useError();
      const ref = useRef<any>()

      useEffect(() => {
          const checkIfClickedOutside = (e: any) => {
              if (open && ref.current && !ref.current.contains(e.target)) {
                  setOpen(false)
              }
          }
          document.addEventListener("mousedown", checkIfClickedOutside)
          return () => {
              document.removeEventListener("mousedown", checkIfClickedOutside)
          }
      }, [open]);

      const deleteModerator = async () => {
          try{
              const res = await axios.delete(`/moderator/${item.id}`);
              refreshModerator(true);
              setOpen(false);
              // console.log(res);
          }catch (error) {
              checkError(error);
          }
      }
    const handleDelete = () => {
        setConfirm({
            message: 'Вы хотите удалить данные?',
            callback: () => {
                try {
                    deleteModerator();
                    cleanConfirm();
                } catch (error) {}
            },
        });
    };
    const handleEditModerator = () => {
        setOpen(false);
        setOpenModal(true);
        setUserItem({item:item,binaryImg:item.imageUrl})
    }
      return(
            <CardWraper>
                  <ActionBtn onClick={()=>setOpen(open=>!open)}><DostsIcon/></ActionBtn>    
                  <CardBox>
                        <AvatarImg><img src={item.imageUrl!='noUrl'?item.imageUrl:DefUSer}/></AvatarImg>
                        <NameTitle>{item.firstName} {item.secondName}</NameTitle>
                        <PhoneNumber>{item.phoneNumber}</PhoneNumber>
                        <RoleTitle>Модератор</RoleTitle>
                        <RoleTags>
                             { 
                              item.categoryNames.map((item:any)=>(
                                          <Tag key={item.id}>{item.name}</Tag>
                                    
                                    ))
                              }
                        </RoleTags>

                  </CardBox>
                  {
                        open&&
                        <Actions ref={ref}>
                              <div onClick={handleEditModerator}><EditIcon/>Изменить</div>
                              <div onClick={handleDelete}><DeleteIcon/>Удалить</div>
                        </Actions>
                  }
            </CardWraper>
      )
      
}
export default ModeratorCard;
