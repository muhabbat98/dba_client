import React from 'react';
import { TemplateListItemContainer, Number, Title } from './style';

interface Props {
  template: any;
  number: number;
}

const TemplateListItem: React.FC<Props> = ({ template, number }) => {
  return (
    <TemplateListItemContainer>
      <Number>{number}</Number>
      <Title>{template.name}</Title>
    </TemplateListItemContainer>
  );
};

export default TemplateListItem;
