import styled from 'styled-components';


export const LeftMenuModal = styled.div<LeftMenuProps>`
	transform: ${({isVisible})=>isVisible ? 'translateX(0px)' : 'translateX(-100%)'};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0, 0, 0.32);
    z-index:5;	

`;
interface LeftMenuProps {
	isVisible:boolean
}
export const LeftMenu = styled.div<LeftMenuProps>`
	transform: ${({isVisible})=>isVisible ? 'translateX(0px)' : 'translateX(-100%)'};
	transition: 0.3s;
   	width: 280px;
    background-color: white;
    min-height: 100vh;
    z-index:7;
	box-sizing: border-box;

`;
export const EnterAccunt = styled.div`
	min-width: 250px;
   	padding: 8px 16px;
   	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 32px;
`;

export const AccountHeader = styled.h3`
`;
export const EnterButton = styled.span`
	background-color: ${({theme})=>theme.primary_color};
	color:#fff;
	border: none;
    outline: none;
	border-radius: 8px;
	padding: 10px 47px;
`;
export const MenuList = styled.ul`
`;
export const MenuListItem = styled.li`
	display: flex;
	align-items: center;
	margin:16px;
	font-weight:600;
	font-size: 16px;
	line-height: 24px;
	&:first-child{
		background: #E9ECF4;
	}
	a{
		display: flex;
		align-items: center;
		text-decoration: none;	
		width:100%;		
	}
	&:hover{
		background-color: #E9ECF4;
	}
    
`;
export const ListIcon = styled.img`
    fill: black;
`;
export const ListText = styled.p`
	margin:0;
	padding:8px;
	margin-left: 10px;
	color:#000;
`;

export const UserHeader = styled.div`
   	padding: 24px 16px;
   	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 32px;
	border-bottom: 1px solid #E9ECF4;
	display: flex;

`;
export const UserImage = styled.img`
width: 40px;
height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;
export const UserInfo = styled.div`
`;
export const UserName = styled.div`
	width: 100%;
	font-size: 14px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.3px;
	color:${({theme})=>theme.primary_color};
`;
export const UserAddress = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
`;