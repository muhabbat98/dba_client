import React,{useState,useRef,useEffect} from 'react';
import { ReactComponent as DostsIcon } from '../../assets/icons/dots-icon.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash-black.svg'
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



const arr=["Электроника","Здоровье"];
const ModeratorCard = () => {
      const [open,setOpen] = useState<boolean>(false);
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
      }, [open])
      return(
            <CardWraper>
                  <ActionBtn onClick={()=>setOpen(open=>!open)}><DostsIcon/></ActionBtn>    
                  <CardBox>
                        <AvatarImg><img src={Avatar}/></AvatarImg>
                        <NameTitle>Иван Ванко</NameTitle>
                        <PhoneNumber>+998 93 214 55 99</PhoneNumber>
                        <RoleTitle>Модератор</RoleTitle>
                        <RoleTags>
                             { 
                              arr.map((item,index)=>(
                                          <Tag key={index}>{item}</Tag>
                                    
                                    ))
                              }
                        </RoleTags>

                  </CardBox>
                  {
                        open&&
                        <Actions ref={ref}>
                              <div onClick={()=>setOpen(false)}><EditIcon/>Изменить</div>
                              <div onClick={()=>setOpen(false)}><DeleteIcon/>Удалить</div>
                        </Actions>
                  }

            </CardWraper>
      )
      
}
export default ModeratorCard;
