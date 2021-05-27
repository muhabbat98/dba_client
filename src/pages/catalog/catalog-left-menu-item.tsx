import React, { FC } from 'react'
import { CatalogLeftMmenuLi } from './style';

interface CatalogLeftMenuItemProps {
   item?: any
}

const CatalogLeftMenuItem: FC<CatalogLeftMenuItemProps> = ({ item }) => {
   return (
      <CatalogLeftMmenuLi>{item.name}</CatalogLeftMmenuLi>
   )
}

export default CatalogLeftMenuItem;
