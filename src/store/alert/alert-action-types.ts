import { AlertTypes } from "./alert-types";
import { AlertReducerState } from "./alert-reducer";

interface SetAlert {
  type: AlertTypes.SET_ALERT;
  payload: AlertReducerState;
}

export type SetAlertType = SetAlert;
