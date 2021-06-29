import { Action } from './login-action-types';
import { Types } from './login-types';

interface State {
  open: boolean;
}

const initialState: State = {
  open: false,
};

export function loginReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case Types.OPEN_LOGIN:
      return {
        ...state,
        open: true,
      };
    case Types.CLOSE_LOGIN:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
