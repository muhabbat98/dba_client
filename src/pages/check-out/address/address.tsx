import React, { FC } from 'react';

interface AdressItemProps {
  nextStep: any;
}

const AdressItem: FC<AdressItemProps> = ({ nextStep }) => {
  console.log(nextStep);
  return <>second</>;
};
export default AdressItem;
