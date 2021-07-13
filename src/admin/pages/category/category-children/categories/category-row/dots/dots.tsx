import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Dot, DotsContainer } from './style';
import Menu from './menu';
import { axios, useActionCreators, useError } from '../../../../../../../hooks';

interface Props {
  row: any;
  fetchCategory: () => void;
}

const Dots: React.FC<Props> = ({ row, fetchCategory }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setConfirm, setAlertMessage, cleanConfirm } = useActionCreators();
  const { checkError } = useError();
  const className = 'dots' + uuid();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', clickHandler);
    } else {
      window.removeEventListener('click', clickHandler);
    }

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, [isOpen]);

  function clickHandler(e: any) {
    console.log(1);
    if (!e.target.classList.contains(className)) {
      closeMenu();
    }
  }

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggle = () => setIsOpen((prevState) => !prevState);

  const edit = () => {};

  const deleteCategory = () => {
    setConfirm({
      message: (
        <>
          Вы действительно хотите удалить эту категорию : <br />
          {row.name}
        </>
      ),
      callback: async () => {
        try {
          const response = await axios.delete('/category/' + row.id);
          const data = await response.data;

          setAlertMessage({
            message: data.message,
            type: 'success',
          });
          fetchCategory();
          cleanConfirm();
        } catch (e) {
          checkError(e);
        }
      },
    });
  };

  return (
    <DotsContainer onClick={toggle} open={isOpen} className={className}>
      <Dot open={isOpen} />
      <Dot open={isOpen} />
      <Dot open={isOpen} />
      {isOpen && <Menu deleteCategory={deleteCategory} />}
    </DotsContainer>
  );
};

export default Dots;
