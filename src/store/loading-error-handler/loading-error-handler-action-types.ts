import { LoadingErrorType } from './loading-error-handler-types';

interface StartLoading {
  type: LoadingErrorType.START_LOADING;
}

interface EndLoading {
  type: LoadingErrorType.END_LOADING;
}

interface Error {
  type: LoadingErrorType.ERROR;
  payload: string;
}

export type LoadingErrorActionType = StartLoading | EndLoading | Error;
