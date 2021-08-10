import React, { useEffect, useState } from 'react';
import { ReferenceContainer } from './style';
import References from './references';

interface Props {
  active: boolean;
}

const Reference: React.FC<Props> = ({ active }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  }, []);
  return (
    <ReferenceContainer active={active}>
      <References />
    </ReferenceContainer>
  );
};

export default Reference;
