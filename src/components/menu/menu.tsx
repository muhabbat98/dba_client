import React,{SyntheticEvent,useEffect,useState} from "react";
import { useActionCreators } from '../../hooks';
import {Link, useRouteMatch} from 'react-router-dom';

import {
    ListWrapper,
    MenuWrapper,
    BlurLayer,
    List,
    ListItem,
    MenuIcon,
    MenuTitle,
    CloseButton,
    ChildrenList,
    ChildListItem,
    ChildTitle,
    AdvertismentCol,
    ShowMoreElements
} from './style';
import Container from '../grid/container';
import Row from '../grid/row';
import Col from '../grid/col';
import { ReactComponent as Ic_Male } from "./assets/ic_male.svg"; 
import { ReactComponent as Ic_Female } from "./assets/ic_female.svg"; 
import { ReactComponent as Ad_img } from "./assets/ad_img.svg"; 
import { inherits } from "util";

interface MenuProps {
    menuEls?:any;
    stateHandler?: ()=>void;
}
const MenuContainer:React.FC<MenuProps>=({menuEls,stateHandler})=>{
    let { url, path } = useRouteMatch();
    
    const [menus,setMenus] = useState<any>([]);
    const [activeMenu,setActiveMenu]= useState<any>(null);
    const { startLoading, endLoading, error } = useActionCreators();

    useEffect(()=>{
        
        if(menuEls){
            console.log("menu elements",menuEls)
            setMenus(menuEls);
            setActiveMenu(menuEls[0]);
            endLoading();
        }else{
            startLoading();
        }
    },[])
    
    const handleActiveMenu=(e: SyntheticEvent, item:any)=>{
        setActiveMenu(item);
        const target = e.target as HTMLLIElement;
        if (target.parentElement?.children.length !== undefined) {
            for (let i = 0; i < target.parentElement?.children.length; i++) {
                target.parentElement?.children[i].classList.remove('active');
            }
        }
        target.classList.add('active');
    }

    const activeChildrenlickHandle=(e: SyntheticEvent)=>{
        const target = e.target as HTMLElement;
        target.parentElement?.click();
    }

    const handleShowMore=(e:SyntheticEvent)=>{
        const target = e.target as HTMLElement;
        target.parentElement?.previousElementSibling?.classList.toggle('show');
        if(target.parentElement?.previousElementSibling?.classList.contains('show'))
        {
            target.textContent = 'Закрыть';
        }
        else{
            target.textContent = 'Все категория...';
        }
    }

    const handleClose =()=>{
        if(stateHandler)
            stateHandler();
    }
    
    const handleOutsideClick =()=>{
            setTimeout(function(){
                handleClose();
            },100);
    }

    return(<>
        <BlurLayer onClick={handleOutsideClick}>
            <MenuWrapper onClick={(e)=>e.stopPropagation()}>
                <Container> 
                    <Row>
                        <Col xl={3} lg={3} md={6}>
                            <List>
                        
                                <Link to="/catalog/" style={{ textDecoration:"none", color:"inherit"}} onClick={()=>handleOutsideClick()}>
                                    <ListItem>
                                        <MenuIcon ><Ic_Male/></MenuIcon>
                                        <MenuTitle >Catalog</MenuTitle>
                                    </ListItem>
                                </Link>
              
                                {menus.map((item:any)=>{                                   
                                    return(<ListItem onClick={(e: SyntheticEvent)=>handleActiveMenu(e,item)} >
                                    <MenuIcon onClick={(e: SyntheticEvent)=>activeChildrenlickHandle(e)}><Ic_Male/></MenuIcon>
                                    <MenuTitle  onClick={(e: SyntheticEvent)=> activeChildrenlickHandle(e)}>{item.name}</MenuTitle>
                                </ListItem>)
                                })}
                            </List>
                        </Col>
                        <Col  xl={4} lg={4} md={6}>
                        <ListWrapper >
                        {activeMenu?activeMenu.subCategories.map((item1:any,i:number)=>{
                            console.log("item", item1, activeMenu)
                            if(i<Math.ceil(activeMenu.subCategories.length/2))
                            return(<ChildrenList className="content">
                                <Link style={{ textDecoration:"none"}} to={"/catalog/"+item1.id}  onClick={()=>handleOutsideClick()}>
                                <ChildListItem className="parent">
                                    <ChildTitle>{item1.name}</ChildTitle>
                                </ChildListItem>
                                </Link>
                               {item1.subCategories.map((item2:any,i:number)=>{
                                 if(i<5)
                                   return(<Link style={{ textDecoration:"none"}} to={"/catalog/"+item2.id}  onClick={handleOutsideClick}>
                                       <ChildListItem className="">
                                        <ChildTitle>{item2.name}</ChildTitle>
                                    </ChildListItem></Link>)
                                })}
                                
                            {/* <ShowMoreElements restNumEls={item1.subCategories.length-5}>
                                {item1.subCategories.map(
                                    (item2:any,i:number)=>{
                                        if(i>4)
                                        return(<ChildListItem className="">
                                        <ChildTitle>{item2.name}</ChildTitle>
                                    </ChildListItem>)
                                    }
                                )}</ShowMoreElements> */}
                               {item1.subCategories.length>5?
                               <Link style={{ textDecoration:"none"}} to={"/catalog/"+item1.id}  onClick={handleOutsideClick}><ChildListItem className="">
                                        <ChildTitle style={{color:'#264796'}}>Все категория...</ChildTitle>
                                </ChildListItem></Link>:''}
                        </ChildrenList>)}):''}</ListWrapper>
                        </Col>
                        <Col  xl={4} lg={4} md={6}>
                        <ListWrapper>
                        {activeMenu?activeMenu.subCategories.slice(0).reverse().map((item1:any,i:number)=>{
                            if(i<activeMenu.subCategories.length-Math.ceil(activeMenu.subCategories.length/2))
                            return(<ChildrenList className="content">
                                    <Link style={{ textDecoration:"none"}} to={"/catalog/"+item1.id}  onClick={handleOutsideClick}>
                                        <ChildListItem className="parent">
                                            <ChildTitle>{item1.name}</ChildTitle>
                                        </ChildListItem></Link>
                                    {item1.subCategories.map((item2:any,i:number)=>{
                                        if(i<5)
        
                                        return(<Link style={{ textDecoration:"none"}} to={"/catalog/"+item2.id}  onClick={handleOutsideClick}><ChildListItem className="">
                                                <ChildTitle>{item2.name}</ChildTitle>
                                            </ChildListItem></Link>)
                                        })}
                                    
                                        {/* <ShowMoreElements restNumEls={item1.subCategories.length-5}>
                                        {item1.subCategories.map(
                                            (item2:any,i:number)=>{
                                                if(i>4)
                                                return(<ChildListItem className="">
                                                <ChildTitle>{item2.name}</ChildTitle>
                                            </ChildListItem>)
                                            }
                                        )}</ShowMoreElements> */}
                                        {item1.subCategories.length>5? <Link style={{ textDecoration:"none"}} to={"/catalog/"+item1.id}  onClick={handleOutsideClick}><ChildListItem className="">
                                                <ChildTitle onClick={(e:SyntheticEvent)=>handleShowMore(e)} style={{color:'#264796'}}>Все категория</ChildTitle>
                                        </ChildListItem></Link>:''}
                                </ChildrenList>)}):''}
                        </ListWrapper>
                        </Col>
                        <Col  xl={1}lg={1} md={1}>
                            <CloseButton onClick={handleClose}/>
                        </Col>
                    </Row>
                </Container>
            </MenuWrapper>
        </BlurLayer>
    </>
    );
};

export default MenuContainer;