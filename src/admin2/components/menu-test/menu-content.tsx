import React,{useState,useEffect} from 'react';

import {MenuContentCard,
    MenuColumn,
    MenuUl,
    MenuLi,
    MenuLiHeader
    } from './style'

interface ActiveStateProps{
    state:boolean,
    parentId:string |null,
    catName:string,
    items:any
}

const MenuContent:React.FC<ActiveStateProps>=({state,parentId,catName,items})=>{
   
    const [subCats, setSubCats] = useState<any>();
    const [activeEl, setActiveEl] = useState<any>();

    function handleOnMouseEnter(dataId: any) {
        setActiveEl(null);
        setSubCats(null);
        setTimeout(() => {
          let s = items.find((item: any) => item.id === dataId);
          setActiveEl(dataId);
          setSubCats(s);
        });
      }
    useEffect(() => {
       
        return () => {
        setActiveEl(null);
        setSubCats(null);
        };
    }, []);
    return(<>
        {items.length>0 && (
        <MenuColumn>
            <MenuLiHeader state={parentId===null?false:true}>{catName}</MenuLiHeader>
            <MenuUl>
                {items.length>0 && items.map((item:any)=>{
                    return(<MenuLi key={item.id}  state={item.subCategories.length>0?true:false} onMouseOver={()=>handleOnMouseEnter(item.id)}>{item.name}</MenuLi>)
                })}            
            </MenuUl>
        </MenuColumn>
       )}
        {
            subCats && (
            <MenuContent 
                state={state}
                parentId={subCats.subCategories.id}
                catName={subCats.name}
                items={subCats.subCategories}
                />)
        } 
        </>);
}

export default MenuContent;