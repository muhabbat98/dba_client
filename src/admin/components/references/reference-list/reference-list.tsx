import React from 'react';
import { ReferenceListContainer } from './style';

interface Props {
  references: any[];
}

const ReferenceList: React.FC<Props> = ({ references }) => {
  return <ReferenceListContainer> Reference List</ReferenceListContainer>;
};

export default ReferenceList;
