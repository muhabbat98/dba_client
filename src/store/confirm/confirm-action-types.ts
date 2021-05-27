import { ConfirmType } from './confirm-types';
import { ConfirmReducerState } from './confirm-reducer';

interface SetConfirm {
  type: ConfirmType.SET_CONFIRM;
  payload: ConfirmReducerState;
}

interface CleanConfirm {
  type: ConfirmType.CLEAN_CONFIRM;
}

export type ConfirmActionType = SetConfirm | CleanConfirm;
