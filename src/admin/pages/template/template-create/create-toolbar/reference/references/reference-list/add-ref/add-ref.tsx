import React, { useState } from 'react';
import { AddRefContainer, Content, CloseIcon } from './style';
import { ReactComponent as Close } from '../../../../../../../../assets/icons/cancel.svg';
import Backdrop from '../../../../../../../../../components/backdrop';
import SimpleInput from '../../../../../../../../../components/simple-input';
import Button from '../../../../../../../../../components/button';
import RefItems from './ref-items';
import {
  axios,
  useActionCreators,
  useError,
} from '../../../../../../../../../hooks';
import { useParams } from 'react-router-dom';

interface Props {
  close: () => void;
  items: any[];
  name: string;
  fetFields: any;
}
interface Params {
  id: string;
}

const AddRef: React.FC<Props> = ({ close, items, name, fetFields }) => {
  const [input, setInput] = useState(name);
  const { id } = useParams<Params>();
  const [selectedRef, setSelectedRef] = useState<any[]>([]);
  const { checkError } = useError();
  const { setAlertMessage } = useActionCreators();

  const submit = async () => {
    if (input.length > 0 && selectedRef.length > 0) {
      console.log('name -- ', input);
      console.log('refs -- ', selectedRef);
      try {
        const response = await axios.post('/meta_data/add/field', [
          {
            categoryId: id,
            format: 'REFERENCE',
            name: input,
            referenceItemIds: selectedRef,
          },
        ]);
        const data = await response.data;
        fetFields();
        close();
        setAlertMessage({ message: data.message, type: 'success' });
      } catch (e) {
        checkError(e);
      }
    }
    console.log('incorrect');
  };

  function handleCheck(id: string) {
    const copyRefs = [...selectedRef];
    const find = copyRefs.find((ref) => ref === id);
    console.log('find', find);
    if (find) {
      setSelectedRef(copyRefs.filter((ref) => ref !== find));
      return;
    } else {
      copyRefs.push(id);
    }
    setSelectedRef(copyRefs);
  }

  const active = input.length > 0 && selectedRef.length > 0;

  return (
    <AddRefContainer>
      <Backdrop close={close} />
      <Content>
        <CloseIcon onClick={close}>
          <Close />
        </CloseIcon>
        <SimpleInput
          defaultValue={name}
          placeholder={'Названия'}
          label={'Названия'}
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <RefItems items={items} handleCheck={handleCheck} />
        <Button
          btnType={active ? 'default' : 'disabled'}
          onClick={submit}
          disabled={!active}
        >
          Добавить
        </Button>
      </Content>
    </AddRefContainer>
  );
};

export default AddRef;
