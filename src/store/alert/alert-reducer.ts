import { AlertTypes } from "./alert-types";
import { SetAlertType } from "./alert-action-types";
import { AlertPosition } from "../../utils/alert-position-enum"

export interface AlertReducerState {
  type: "success" | "warning" | "error" | null;
  message: string | null;
  position?: AlertPosition
}

const initialState: AlertReducerState = {
  type: null,
  message: null,
  position: AlertPosition.TOP_CENTER
};

export const alertReducer = (
  state: AlertReducerState = initialState,
  action: SetAlertType
) => {
  if (action.type === AlertTypes.SET_ALERT) {
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};
