import { Types } from './login-types';

interface OpenLogin {
  type: Types.OPEN_LOGIN;
}

interface CloseLogin {
  type: Types.CLOSE_LOGIN;
}

export type Action = OpenLogin | CloseLogin;
