import { Dispatch } from 'redux';
import { AlertTypes } from './alert-types';
import { AlertReducerState } from './alert-reducer';
import { SetAlertType } from './alert-action-types';
import { AlertPosition } from '../../utils/alert-position-enum';

export const setAlertMessage = (message: AlertReducerState) => (
  dispatch: Dispatch
) => {
  setTimeout(() => {
    dispatch(removeAlertMessage());
  }, 4000);

  dispatch({
    type: AlertTypes.SET_ALERT,
    payload: message,
  });
};

export const removeAlertMessage = (): SetAlertType => {
  return {
    type: AlertTypes.SET_ALERT,
    payload: {
      message: null,
      type: null,
      position: AlertPosition.TOP_CENTER,
    },
  };
};
