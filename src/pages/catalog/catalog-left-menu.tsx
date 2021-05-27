import React, { FC } from 'react'
import CatalogLeftMenuItem from './catalog-left-menu-item';
import {CatalogLeftMmenuLi} from './style';

interface CatalogLeftMenuProps {
   items?: any
}

const CatalogLeftMmenu: FC<CatalogLeftMenuProps> = ({ items }) => {

   return (
      <>
         <CatalogLeftMmenuLi className="main-catalog">{items.name}</CatalogLeftMmenuLi>
         {
            items.subCategories.map((i: any) => <CatalogLeftMenuItem item={i} />)
         }
      </>
   )
}

export default CatalogLeftMmenu;