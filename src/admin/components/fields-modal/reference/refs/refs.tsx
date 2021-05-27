import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Search } from '../../../../assets/icons/search.svg';
import Input from '../../../../components/input';
import {
  ReferenceList,
  Title,
  Refer,
  Num,
  RefName,
  ListContainer,
  AddButton,
  AddRefContainer,
  SearchRefContainer,
  SearchInput,
  SearchContainer,
} from './style';
import RefActions from '../ref-actions';
import Ref from './ref';

interface RefsProps {
  referenceList: any;
  addReference: (name: string) => void;
  handleReference: (ref: any) => void;
  currentRef: any;
  deleteReference: (id: string) => void;
  updateReference: (id: string, name: string) => void;
  searchReference: (name: string) => void;
}

const Refs: React.FC<RefsProps> = ({
  referenceList,
  addReference,
  currentRef,
  handleReference,
  deleteReference,
  updateReference,
  searchReference,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (data: any) => {
    addReference(data.name);
    reset();
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
    searchReference(e.target.value);
  };

  return (
    <ReferenceList>
      <Title>Справочники</Title>
      <SearchRefContainer>
        <SearchInput
          placeholder='Искать справочника'
          value={searchValue}
          onChange={handleSearch}
        />
        <SearchContainer>
          <Search />
        </SearchContainer>
      </SearchRefContainer>
      <ListContainer>
        {referenceList.map((r: any, i: number) => {
          return (
            <Ref
              key={r.id}
              currentRef={currentRef}
              handleReference={handleReference}
              num={i}
              r={r}
              deleteReference={deleteReference}
              updateReference={updateReference}
            />
          );
        })}
      </ListContainer>
      <AddRefContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='name'
            register={register({ required: true })}
            label='Имя справочника'
          />
          <AddButton>Добавить справочник</AddButton>
        </form>
      </AddRefContainer>
    </ReferenceList>
  );
};

export default Refs;
