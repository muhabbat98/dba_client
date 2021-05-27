import { SnackbarType } from './snackbar-types';
import { SnackbarReducerState } from './snackbar-reducer';

interface SetMessage {
  type: SnackbarType.SET_MESSAGE;
  payload: SnackbarReducerState;
}

export type SnackbarActionType = SetMessage;
