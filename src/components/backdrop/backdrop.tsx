import React from 'react';
import { BackdropContainer } from './style';

interface Props {
   close: () => void;
}

const Backdrop: React.FC<Props> = ({ close }) => {
   return <BackdropContainer onClick={close}> </BackdropContainer>;
};

export default Backdrop;
