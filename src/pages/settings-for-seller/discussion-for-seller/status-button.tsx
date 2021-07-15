import React, { FC } from 'react';
import { StatusDisccusionButton } from './style';

interface StatusButtonProps {
  isClosed?: boolean;
}

const StatusButton: FC<StatusButtonProps> = ({ children, isClosed }) => {
  return (
    <StatusDisccusionButton isBg={isClosed}>{children}</StatusDisccusionButton>
  );
};

export default StatusButton;
