import { MenuActionType } from './menu-action-types';
import { MenuReducerState } from './menu-reducer';
import { Dispatch } from 'redux';
import { MenuType } from './menu-types';
import { axios } from '../../hooks/useAxios';

export const setMenuMessage = (menu: MenuReducerState): MenuActionType => ({
  type: MenuType.SET_MENU,
  payload: menu,
});

export const fetchMenu = () => async (dispatch: Dispatch, getState: any) => {
  const { menu } = getState();

  if (!menu.menu) {
    try {
      // startLoading();
      const respone = await axios('/category/all');
      const data = await respone.data;

      dispatch({
        type: MenuType.SET_MENU,
        payload: data,
      });

      // setMenuMessage(data);

      // setMenu(data);
      //endLoading();
    } catch (e) {
      //error('Что-то пошло не так!');
    }
  }
};
