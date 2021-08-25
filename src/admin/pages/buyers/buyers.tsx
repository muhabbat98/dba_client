import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BuyersInformation from './buyers-information';
import BuyersList from './buyers-list';
import { BuyersContainer } from './style';
import { useMainContext } from '../main/context';

const Buyers = () => {
  const { path } = useRouteMatch();
  const { setPageTitle } = useMainContext();

  useEffect(() => {
    setPageTitle('Покупатели');
  }, []);

  return (
    <BuyersContainer>
      <Switch>
        <Route exact path={`${path}`} component={BuyersList} />
        <Route exact path={`${path}/:id`} component={BuyersInformation} />
      </Switch>
    </BuyersContainer>
  );
};

export default Buyers;
