import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BuyersInformation from './buyers-information';
import BuyersList from './buyers-list';
import { BuyersContainer } from './style';

const Buyers = () => {
   const { path } = useRouteMatch();

   return (
      <BuyersContainer>
         <Switch>
            <Route exact path={`${path}`} component={BuyersList} />
            <Route exact path={`${path}/:id`} component={BuyersInformation} />
         </Switch>
      </BuyersContainer>
   );
}

export default Buyers;
