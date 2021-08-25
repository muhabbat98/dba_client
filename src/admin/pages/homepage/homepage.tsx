import { HomepageContainer } from './style';
import { useMainContext } from '../main/context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const { setPageTitle } = useMainContext();

  useEffect(() => {
    setPageTitle('Главная');
  }, []);

  return <HomepageContainer>Homepage2</HomepageContainer>;
};

export default Homepage;
