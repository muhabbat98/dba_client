import React from 'react';
import { useActionCreators, useSelector } from '../../hooks';
import { AlertPosition } from '../../utils/alert-position-enum';
import { AlertContainer, AlertIcon, AlertText, AlertIconClose } from './style';

import { ReactComponent as Success } from '../../assets/icons/alert-success.svg';
import { ReactComponent as Warning } from '../../assets/icons/alert-warning.svg';
import { ReactComponent as Error } from '../../assets/icons/alert-error.svg';
import { ReactComponent as SuccessColse } from '../../assets/icons/alert-success-close.svg';
import { ReactComponent as WarningClose } from '../../assets/icons/alert-warning-close.svg';
import { ReactComponent as ErrorClose } from '../../assets/icons/alert-error-close.svg';

const Alert = () => {
  const { message, type, position } = useSelector((state) => state.alert);
  const { removeAlertMessage } = useActionCreators();

  const icons = {
    success: Success,
    warning: Warning,
    error: Error,
  };

  const closeIcons = {
    success: SuccessColse,
    warning: WarningClose,
    error: ErrorClose,
  };

  const Icon = icons[type!];
  const IconClose = closeIcons[type!];

  const closeHandle = () => {
    removeAlertMessage();
  };

  const checkPosition = (position: AlertPosition | undefined) => {
    switch (position) {
      case AlertPosition.TOP_LEFT:
        return {
          top: 'default',
          left: 'left',
          bottom: 'auto',
          right: 'auto',
        };
      case AlertPosition.TOP_RIGHT:
        return {
          top: 'default',
          bottom: 'auto',
          right: 'right',
        };
      case AlertPosition.BOTTOM_LEFT:
        return {
          top: 'auto',
          left: 'left',
          bottom: 'default',
          right: 'auto',
        };
      case AlertPosition.BOTTOM_CENTER:
        return {
          top: 'auto',
          left: 'auto',
          bottom: 'default',
          right: 'auto',
        };
      case AlertPosition.BOTTOM_RIGHT:
        return {
          top: 'auto',
          bottom: 'default',
          right: 'right',
        };
      default:
        return {
          top: 'default',
          left: 'auto',
          bottom: 'auto',
          right: 'auto',
        };
    }
  };

  const pos: any = checkPosition(position);

  return (
    type && (
      <AlertContainer posi={pos!} bgColor={type!}>
        <AlertIcon>
          <Icon />
        </AlertIcon>
        <AlertText>{message!} </AlertText>
        <AlertIconClose onClick={closeHandle}>
          <IconClose />
        </AlertIconClose>
      </AlertContainer>
    )
  );
};

export default Alert;
