import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();
  console.log('id - ', id);
  return (
    <TemplateListItemContainer>
      <NumberContainer>
        <Number>{number}</Number>
      </NumberContainer>
      <Title>{template.name}</Title>
      <View onClick={() => push('/admin/template/view/' + id)}>Посмотреть</View>
    </TemplateListItemContainer>
  );
};

export default TemplateListItem;
