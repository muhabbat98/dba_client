import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AboutSeller from './about-seller';
import ListSellers from './list-sellers'

import { SellersContainer } from './style';

const Sellers = () => {
   const { path } = useRouteMatch();

   return (
      <SellersContainer>
         <Switch>
            <Route exact path={`${path}/`} component={ListSellers} />
            <Route exact path={`${path}/:id`} component={AboutSeller} />
         </Switch>
      </SellersContainer>
   );
}

export default Sellers;
