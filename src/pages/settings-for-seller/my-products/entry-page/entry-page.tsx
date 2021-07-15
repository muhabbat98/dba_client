import Button from '../../../../components/button';

import { EntryPageContainer, MyProductsH1 } from './style';

import { ReactComponent as MyProductsPageIcon } from '../../../../../assets/images/my-products-page-icon.svg'

const EntryPage = () => {
   return (
      <EntryPageContainer>
         <MyProductsPageIcon />
         <MyProductsH1>Здесь будут храниться ваши товары</MyProductsH1>
         <Button>Добавить товар</Button>
      </EntryPageContainer>
   );
}

export default EntryPage;
