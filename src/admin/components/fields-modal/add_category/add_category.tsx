import React, { useState, useEffect } from 'react';
import Add from '../../settings/add';

interface AddCategoryProps {
  close: () => void;
  fetchMenu: () => void;
  menu: any;
}

const AddCategory: React.FC<AddCategoryProps> = ({
  fetchMenu,
  close,
  menu,
}) => {
  return (
    <div>
      <Add parentId={menu.parentId} close={close} fetchMenu={fetchMenu} />
    </div>
  );
};

export default AddCategory;
  