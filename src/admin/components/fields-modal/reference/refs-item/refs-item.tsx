import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../components/input';
import Checkbox from '../../../../components/checkbox';
import { ReactComponent as Search } from '../../../../assets/icons/search.svg';
import Item from './item';
import {
  ReferenceList,
  Title,
  Refer,
  Num,
  RefName,
  ListContainer,
  AddButton,
  AddRefContainer,
  CheckboxContainer,
  TitleContainer,
  SearchContainer,
} from './style';

import { SearchRefContainer, SearchInput } from '../refs/style';

interface RefsProps {
  addReferenceItem: (name: string) => void;
  currentRef: any;
  referenceItem: any;
  removeItem: any;
  addItem: any;
  searchReferenceItem: (name: string) => void;
  deleteReferenceItems: (id: string) => void;
  updateReferenceItems: (id: string, name: string) => void;
}

const RefsItem: React.FC<RefsProps> = ({
  addReferenceItem,
  currentRef,
  referenceItem,
  removeItem,
  addItem,
  searchReferenceItem,
  deleteReferenceItems,
  updateReferenceItems,
}) => {
  const { handleSubmit, register, reset } = useForm();
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (data: any) => {
    addReferenceItem(data.name);
    reset();
  };

  const check = (e: any, id: string) => {
    if (e.target.value === 'false') {
      addItem(id);
    } else {
      removeItem(id);
    }
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
    searchReferenceItem(e.target.value);
  };

  useEffect(() => {
    setSearchValue('');
  }, [currentRef]);

  return (
    <ReferenceList>
      <Title>{currentRef.name}</Title>
      <SearchRefContainer>
        <SearchInput
          placeholder='Искать'
          value={searchValue}
          onChange={handleSearch}
        />
        <SearchContainer>
          <Search />
        </SearchContainer>
      </SearchRefContainer>
      <ListContainer>
        {referenceItem.length === 0
          ? 'Данных нет'
          : referenceItem.map((r: any, i: number) => {
              return (
                <Item
                  check={check}
                  key={r.id}
                  r={r}
                  currentRef={currentRef}
                  num={i}
                  deleteReferenceItems={deleteReferenceItems}
                  updateReferenceItems={updateReferenceItems}
                />
                // <Refer key={r.id}>
                //   <TitleContainer>
                //     <Num>{i + 1}</Num>
                //     <RefName>{r.name} </RefName>
                //   </TitleContainer>
                //   <CheckboxContainer>
                //     <Checkbox
                //       callback={(e) => check(e, r.id)}
                //       value={r.selected}
                //       checked={r.selected}
                //     />
                //   </CheckboxContainer>
                // </Refer>
              );
            })}
      </ListContainer>
      <AddRefContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='name'
            register={register({ required: true })}
            label='Справочника'
          />
          <AddButton>Добавить</AddButton>
        </form>
      </AddRefContainer>
    </ReferenceList>
  );
};

export default RefsItem;
