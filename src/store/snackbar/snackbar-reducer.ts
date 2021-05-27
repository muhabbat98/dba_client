import { SnackbarType } from './snackbar-types';
import { SnackbarActionType } from './snackbar-action-types';

export interface SnackbarReducerState {
  type: 'success' | 'info' | 'warning' | 'error' | null;
  message: string | null;
}

const initialState: SnackbarReducerState = {
  message: null,
  type: null,
};

export const snackbarReducer = (
  state: SnackbarReducerState = initialState,
  action: SnackbarActionType
) => {
  if (action.type === SnackbarType.SET_MESSAGE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
