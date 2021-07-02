import React,{ useState, useEffect } from 'react';
import { useSelector } from '../../../hooks';
import { useAxios, axios, useActionCreators } from '../../../hooks';
import { NavLink, useRouteMatch } from 'react-router-dom'; 
import MenuIcon from './menu-icon';
import MenuContent from './menu-content';
import {
    MainContainer, MenuButton, MenuContentCard
} from './style'
function MenuTest(){
    const [menu, setMenu] = useState<any>();
    const { startLoading, endLoading, error } = useActionCreators();
    const [menuForSettings, setMenuForSettings] = useState<any>();
    const [state, SetMenuTrigger] = useState<any>(false);
    const fetchMenu = async () => {
        setMenu(null);
        try {
        startLoading();
        const respone = await axios('/category/all');
        const data = await respone.data;
        setMenu(data);
        endLoading();
        } catch (e) {
        error('Что-то пошло не так!');
        }
    };
    useEffect(() => {
        fetchMenu();
      }, []);
    return(<MainContainer>
            <MenuButton onClick={()=>SetMenuTrigger(!state)}>
                <MenuIcon state={state} />
                    Каталог
            </MenuButton>
            <MenuContentCard state={state}>
            {menu && (<MenuContent state={state}
                parentId={null}
                catName={"Каталог"}
                items={menu}/>)}
                </MenuContentCard>
    </MainContainer>);
}
export default MenuTest;