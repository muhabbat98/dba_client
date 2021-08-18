import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../../../assets/icons/shopping-cart.svg';
import Breadcrumb from '../../hambuger-menu/hambuger-menu';
import { Count } from '../../middle-header-action/middle-header-action-for-buyer/style';

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
	
  return (
    <HeaderForMobileContainer>
		<LogoHeader>
			<LeftMenuBtn>
				<Breadcrumb menuState={false}></Breadcrumb>
			</LeftMenuBtn>
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
					<ListLink isActive={true} as={Link} to='/'>Мобильные телефоны</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Телевизоры</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Товари длядома</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Авто</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Гигиена</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Зоотовари</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Красота</ListLink>
				</ListItem>
				<ListItem>
					<ListLink isActive={false} as={Link} to='/'>Строительство и ремонт</ListLink>
				</ListItem>

			</List>
		</ScrollableHeader>
    </HeaderForMobileContainer>);
};

export default HeaderForMobile;
