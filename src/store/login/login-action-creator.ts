import { Action } from './login-action-types';
import { Types } from './login-types';

export const openLogin = (): Action => ({
  type: Types.OPEN_LOGIN,
});

export const closeLogin = (): Action => ({
  type: Types.CLOSE_LOGIN,
});
