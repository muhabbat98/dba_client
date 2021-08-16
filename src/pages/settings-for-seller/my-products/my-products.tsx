import EntryPage from './entry-page/entry-page';
import MyProductsTable from './my-products-table';

import { MyProductsContainer } from './style';

const MyProducts = () => {
  return (
    <MyProductsContainer>
      {/* <EntryPage /> */}

      <MyProductsTable />
    </MyProductsContainer>
  );
};

export default MyProducts;
