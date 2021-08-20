import { useState,FC, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbButton from '../../../hambuger-menu/hambuger-menu';
import { EnterAccunt, LeftMenu, LeftMenuModal, AccountHeader, EnterButton, MenuList, MenuListItem, ListIcon, ListText, UserHeader, UserImage, UserInfo, UserName, UserAddress} from './style';
import Heart from '../mobile-icons/heart.svg';
import Book from '../mobile-icons/book.svg';
import Location from '../mobile-icons/location.svg';
import Setting from '../mobile-icons/setting.svg';
import LogOut from '../mobile-icons/logout-2.svg';
import DefaultImg from '../../../../assets/images/card-item1.png'
import {
	useActionCreators,
	useSelector,
  } from '../../../../hooks';

interface BreadCrumbProps {
    isOpen: boolean;
	setModal:any
  }


const BreadCrumb:FC<BreadCrumbProps> = ({isOpen, setModal}) => {

	const { openLogin,setConfirm, cleanUser, cleanConfirm } = useActionCreators();

	
	const user:any = useSelector(state=> state.user);

	const userModal = function (){
		openLogin();
		setModal(false)
	}
	const handleExit = ()=>{
		setConfirm({
            message: 'Вы действительно хотите выйти',
            callback: () => {
                cleanUser();
                cleanConfirm();
            },
        });
	}
  return (
	  <LeftMenuModal isVisible={isOpen} onClick={e=>{if(e.currentTarget=== e.target)setModal(false)}} >

		  <LeftMenu  isVisible={isOpen}>
		  	
				{user&& !user.id ? <EnterAccunt>
					<AccountHeader> Войдите в свой аккаунт</AccountHeader>					
					<EnterButton onClick={userModal} >Войти </EnterButton>
				</EnterAccunt>
					:
					<UserHeader>
						<UserImage src={DefaultImg}></UserImage>
						<UserInfo>
							<UserName>{user&&user.firstName}</UserName>
							<UserAddress>{user&&user.email}</UserAddress>						
						</UserInfo>
					</UserHeader>
				}
				<MenuList>
					<MenuListItem>
						<BreadCrumbButton menuState={false} ></BreadCrumbButton> 
						<ListText>Каталог</ListText>
					</MenuListItem>
					<MenuListItem>
						<Link to ='/'>
							<ListIcon src={Book}></ListIcon>
							<ListText>Заказы  </ListText>
						</Link>
					</MenuListItem>
					<MenuListItem>
						<Link to='/wishlist' onClick={()=>setModal(false)}>
							<ListIcon  src={Heart}></ListIcon>
							<ListText>Избранное </ListText>
						</Link>
					</MenuListItem>
					<MenuListItem>
						<Link to='/'>
							<ListIcon src={Location} ></ListIcon>
							<ListText>Ташкент</ListText>
						</Link>
					</MenuListItem>
					{
						user&& user.id?<>
							<MenuListItem>
								<Link to='/settings' onClick={()=>setModal(false)}>
									<ListIcon src={Setting}></ListIcon>
									<ListText>Настройки</ListText>
								</Link>
							</MenuListItem>
							<MenuListItem onClick={handleExit}>
									<ListIcon src={LogOut}></ListIcon>
									<ListText>Выйти</ListText>
							</MenuListItem></>
								: 
							<></>
					}
				</MenuList>
		  </LeftMenu>
	  </LeftMenuModal>
  );
};

export default  BreadCrumb;
