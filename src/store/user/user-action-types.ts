import { UserType } from './user-types';
import { UserReducerState } from './user-reducer';

interface SetUser {
  type: UserType.SET_USER;
  payload: UserReducerState;
}

interface CleanUser {
  type: UserType.CLEAN_USER;
}

export type UserActionType = SetUser | CleanUser;
