import { MenuType } from "./menu-types";
import {MenuReducerState} from './menu-reducer';

interface SetMenu {
   type: MenuType.SET_MENU,
   payload: MenuReducerState
}

export type MenuActionType = SetMenu;