import { LoadingErrorActionType } from './loading-error-handler-action-types';
import { LoadingErrorType } from './loading-error-handler-types';

export const startLoading = (): LoadingErrorActionType => ({
  type: LoadingErrorType.START_LOADING,
});

export const endLoading = (): LoadingErrorActionType => ({
  type: LoadingErrorType.END_LOADING,
});

export const error = (error: string): LoadingErrorActionType => ({
  type: LoadingErrorType.ERROR,
  payload: error,
});
