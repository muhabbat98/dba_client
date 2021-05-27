import { MenuType } from './menu-types';
import { MenuActionType } from './menu-action-types';

export interface MenuReducerState {
  menu: any | null;
}

const initialState: MenuReducerState = {
  menu: null,
};

export const menuReducer = (
  state: MenuReducerState = initialState,
  action: MenuActionType
) => {
  if (action.type === MenuType.SET_MENU) {
    return {
      ...state,
      menu: action.payload,
    };
  }

  return state;
};
