import { ConfirmType } from './confirm-types';
import { ConfirmActionType } from './confirm-action-types';

export interface ConfirmReducerState {
  message: any | undefined;
  callback: () => void;
}

const initialState: ConfirmReducerState = {
  callback: () => {},
  message: undefined,
};

export const confirmReducer = (
  state: ConfirmReducerState = initialState,
  action: ConfirmActionType
) => {
  switch (action.type) {
    case ConfirmType.SET_CONFIRM:
      return {
        ...state,
        ...action.payload,
      };
    case ConfirmType.CLEAN_CONFIRM:
      return {
        callback: () => {},
        message: undefined,
      };
    default:
      return state;
  }
};
