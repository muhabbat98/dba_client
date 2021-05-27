import { UserActionType } from './user-action-types';
import { UserType } from './user-types';
import { UserReducerState } from './user-reducer';

export const setUser = (user: UserReducerState): UserActionType => ({
  type: UserType.SET_USER,
  payload: user,
});

export const cleanUser = (): UserActionType => ({
  type: UserType.CLEAN_USER,
});
