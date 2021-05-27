import { LoadingErrorType } from './loading-error-handler-types';
import { LoadingErrorActionType } from './loading-error-handler-action-types';

interface LoadingErrorReducerState {
  error: string | null;
  loading: boolean;
}

const initialState: LoadingErrorReducerState = {
  error: null,
  loading: true,
};

export const loadingErrorReducer = (
  state: LoadingErrorReducerState = initialState,
  action: LoadingErrorActionType
) => {
  switch (action.type) {
    case LoadingErrorType.START_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case LoadingErrorType.END_LOADING:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case LoadingErrorType.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
