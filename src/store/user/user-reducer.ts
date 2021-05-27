import { UserType } from './user-types';
import { UserActionType } from './user-action-types';

export interface UserReducerState {
  id: string | null;
  username: string | null;
  email: string | null;
  roles: string | null;
  accessToken: string | null;
  tokenType: string | null;
  firstName: string | null;
  secondName: string | null;
}

const initialState: UserReducerState = {
  id: null,
  username: null,
  email: null,
  roles: null,
  accessToken: null,
  tokenType: null,
  firstName: null,
  secondName: null,
};

export const userReducer = (
  state: UserReducerState = initialState,
  action: UserActionType
) => {
  switch (action.type) {
    case UserType.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case UserType.CLEAN_USER:
      return {
        id: null,
        username: null,
        email: null,
        roles: null,
        accessToken: null,
        tokenType: null,
      };

    default:
      return state;
  }
};
