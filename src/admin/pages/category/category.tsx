import { CategoryProvider } from './context';
import CategoryMain from './category-main';

const Category = () => {
  return (
    <CategoryProvider>
      <CategoryMain />
    </CategoryProvider>
  );
};

export default Category;
