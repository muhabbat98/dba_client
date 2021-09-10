import React, { FC, useEffect, useState } from 'react'
import CatalogLeftMenuItem from './catalog-left-menu-item';
import { axios, useError } from '../../hooks'
import {CatalogLeftMmenuLi} from './style';

interface CatalogLeftMenuProps {
   items?: any,
}

const CatalogLeftMmenu: FC<CatalogLeftMenuProps> = ({ items }) => {
   const [child, setChild] = useState<any>([])
   const{checkError} = useError()
   const catalog = async(id:any)=>{
      try{
         const res = await axios.get("catalog?parentId="+ id)
         setChild(res.data)      
      }
      catch(err){
        checkError(err)
      }
   }
   useEffect(()=>{
      catalog(items.id)
   },[])
   return (
      <>
         <CatalogLeftMmenuLi className="main-catalog">{items.name}</CatalogLeftMmenuLi>
         {
           child.map((i: any, index:number) => <CatalogLeftMenuItem key={index} item={i} />)
         }
      </>
   )
}

export default CatalogLeftMmenu;