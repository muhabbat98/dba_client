import React from 'react';
import { NumContainer } from './style';

interface Props {
  num: number;
}

const Num: React.FC<Props> = ({ num }) => {
  return <NumContainer>{num}</NumContainer>;
};

Num.defaultProps = {
  num: 1,
};

export default Num;
