import { ConfirmActionType } from './confirm-action-types';
import { ConfirmType } from './confirm-types';
import { ConfirmReducerState } from './confirm-reducer';

export const setConfirm = (
  confirm: ConfirmReducerState
): ConfirmActionType => ({
  type: ConfirmType.SET_CONFIRM,
  payload: confirm,
});

export const cleanConfirm = (): ConfirmActionType => ({
  type: ConfirmType.CLEAN_CONFIRM,
});
