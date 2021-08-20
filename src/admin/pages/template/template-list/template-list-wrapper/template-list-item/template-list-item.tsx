import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  TemplateListItemContainer,
  Number,
  Title,
  NumberContainer,
  View,
} from './style';

interface Props {
  template: any;
  number: number;
}

const TemplateListItem: React.FC<Props> = ({ template, number }) => {
  const { push } = useHistory();

  return (
    <TemplateListItemContainer>
      <NumberContainer>
        <Number>{number}</Number>
      </NumberContainer>
      <Title>{template.name}</Title>
      <View onClick={() => push('/admin/template/view/' + template.id)}>
        Посмотреть
      </View>
    </TemplateListItemContainer>
  );
};

export default TemplateListItem;
