import { useActionCreators } from './useActionCreators';

export const useError = () => {
  const { setAlertMessage } = useActionCreators();

  const checkError = (error: any) => {
    if (error.debugMessage) {
      setAlertMessage({
        message: error.debugMessage,
        type: 'error',
      });
    } else {
      setAlertMessage({
        message: error.message,
        type: 'error',
      });
    }
  };

  return {
    checkError,
  };
};
