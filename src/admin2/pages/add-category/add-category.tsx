import { useState, useEffect } from 'react';
import { axios, useActionCreators } from '../../../hooks';
import StepLoader from '../../components/step-loader';
import Menu from '../../components/category-menu';
import FieldsModal from '../../components/fields-modal';
import { AddCategoryContainer } from './style';

function AddCategory() {
  const [menu, setMenu] = useState<any>();
  const { startLoading, endLoading, error } = useActionCreators();
  const [menuForSettings, setMenuForSettings] = useState<any>();

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

  const setSettings = (m: any) => {
    setMenuForSettings(m);
  };

  const close = () => {
    setMenuForSettings(null);
  };

  return (
    <AddCategoryContainer>
      {menuForSettings && (
        <FieldsModal
          menu={menuForSettings}
          close={close}
          fetchMenu={fetchMenu}
        />
      )}

      <StepLoader />

      {menu && (
        <Menu
          breadCrumb=''
          parentId={null}
          setSettings={setSettings}
          catName='Главное меню'
          items={menu}
        />
      )}
    </AddCategoryContainer>
  );
}

export default AddCategory;
