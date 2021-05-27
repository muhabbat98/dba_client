import { SnackbarActionType } from './snackbar-action-types';
import { SnackbarReducerState } from './snackbar-reducer';
import { Dispatch } from 'redux';
import { SnackbarType } from './snackbar-types';

export const setSnackbarMessage = (message: SnackbarReducerState) => (
  dispatch: Dispatch
) => {
  setTimeout(() => {
    dispatch(resetSnackbarInfo());
  }, 3500);

  dispatch({
    type: SnackbarType.SET_MESSAGE,
    payload: message,
  });
};

export const resetSnackbarInfo = (): SnackbarActionType => {
  return {
    type: SnackbarType.SET_MESSAGE,
    payload: { message: null, type: null },
  };
};
