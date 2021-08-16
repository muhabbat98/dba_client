import React from 'react';
import { TemplateListWrapperContainer } from './style';
import TemplateListItem from './template-list-item';

interface Props {
  templates: any[];
}

const TemplateListWrapper: React.FC<Props> = ({ templates }) => {
  return (
    <TemplateListWrapperContainer>
      {templates.map((template, index) => (
        <TemplateListItem
          key={template.id}
          template={template}
          number={index + 1}
        />
      ))}
    </TemplateListWrapperContainer>
  );
};

export default TemplateListWrapper;
