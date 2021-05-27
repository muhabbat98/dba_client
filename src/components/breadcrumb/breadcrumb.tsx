import React, { FC } from 'react';
import { BreadcrumbContainer } from './style';

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title }) => {
  return (
    <BreadcrumbContainer>
      {'Главная / Настройки / Мои данные'}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
