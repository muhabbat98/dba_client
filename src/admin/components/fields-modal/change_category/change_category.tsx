import React from 'react';
import Change from '../../settings/change-cat';

interface ChangeCategoryProps {
  close: () => void;
  fetchMenu: () => void;
  menu: any;
}

const ChangeCategory: React.FC<ChangeCategoryProps> = ({
  fetchMenu,
  close,
  menu,
}) => {
  return (
    <div>
      <Change menu={menu} close={close} fetchMenu={fetchMenu} />
    </div>
  );
};

export default ChangeCategory;
