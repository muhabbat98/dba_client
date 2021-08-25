import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AboutSeller from './about-seller';
import ListSellers from './list-sellers';
import { useMainContext } from '../main/context';

import { SellersContainer } from './style';

const Sellers = () => {
  const { path } = useRouteMatch();
  const { setPageTitle } = useMainContext();

  useEffect(() => {
    setPageTitle('Продавцы');
  }, []);

  return (
    <SellersContainer>
      <Switch>
        <Route exact path={`${path}/`} component={ListSellers} />
        <Route exact path={`${path}/:id`} component={AboutSeller} />
      </Switch>
    </SellersContainer>
  );
};

export default Sellers;
