import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Num from '../num';
import Dots from '../dots';
import { CategoryRowContainer, CategoryName, Left, Right } from './style';

interface Props {
  num: number;
  row: any;
  fetchMenu: () => void;
}

const CategoryRow: React.FC<Props> = ({ fetchMenu, row, num }) => {
  const { path } = useRouteMatch();
  const { push } = useHistory();

  const onClick = () => {
    push(path + '/' + row.id);
  };

  return (
    <CategoryRowContainer>
      <Left>
        <Num num={num} />
        <CategoryName onClick={onClick}>{row.name}</CategoryName>
      </Left>
      <Right>
        <Dots row={row} fetchMenu={fetchMenu} />
      </Right>
    </CategoryRowContainer>
  );
};

export default CategoryRow;
