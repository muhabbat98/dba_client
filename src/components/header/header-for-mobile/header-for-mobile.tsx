import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../../../assets/icons/shopping-cart.svg';
import Breadcrumb from '../../hambuger-menu/hambuger-menu';
import { Count } from '../../middle-header-action/middle-header-action-for-buyer/style';
import BreadCrumbMenu from './bread-crumb'
import { Basket, HeaderForMobileContainer, InputHeader, LeftMenuBtn, LogoHeader, Marketplace, ScrollableHeader, SearchInput, List, ListItem, MLink, ListLink } from './style';
import {
	useActionCreators,
	useRole,
	UserRole,
	useSelector,
  } from '../../../hooks';
import { checkUSer } from '../../../utils/check-user';
const HeaderForMobile = () => {
	const { wishlist, cart, user } = useSelector((state) => ({
		wishlist: state.wishlist.wishlistItems.length,
		cart: state.cart.totalCount,
		user: checkUSer(state.user),
	  }));
	const [active, setActive] = useState('/')
	const [menu, setModal] = useState(false)
  return (
    <HeaderForMobileContainer>
		<LogoHeader>
			<LeftMenuBtn onClick={()=>setModal(!menu)}>
				<Breadcrumb menuState={menu} ></Breadcrumb>
			</LeftMenuBtn>
				<BreadCrumbMenu isOpen={menu} setModal={setModal}/>		
			<Marketplace>
				<MLink as = {Link} to='/'>Marketplace</MLink>
			</Marketplace>
			<Basket>
				<Link to="/cart">
					<Cart/>
					{cart > 0 && <Count>{cart}</Count>}
				</Link>
			</Basket>
		</LogoHeader>
		<InputHeader>
			<SearchInput>
				<input type="text"  placeholder=" Я ищу..."/>
			</SearchInput>
		</InputHeader>
		<ScrollableHeader>
			<List>
				<ListItem >
					<ListLink isActive={active==='/'} as={Link} to='/'>Мобильные телефоны</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Телевизоры</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Товари длядома</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Авто</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Гигиена</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Зоотовари</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={active==='/route'} as={Link} to='/route'>Красота</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Строительство и ремонт</ListLink>
				</ListItem>

			</List>
		</ScrollableHeader>
    </HeaderForMobileContainer>);
};

export default HeaderForMobile;
