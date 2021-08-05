import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { BuyerContentContainer } from './style';
import PersonalInfo from '../personal-info';
import DeliveryAddress from '../delivery-address';
import PersonalData from '../personal-data';
import Payment from '../payment';
import Orders from '../orders';
import Discussion from '../discussion';
import MobileChat from '../mobile-chat';

const BuyerContent = () => {
  let { path } = useRouteMatch();

  return (
    <BuyerContentContainer>
      <Switch>
        <Route exact path={`${path}/`} component={PersonalInfo} />

        <Route
          exact
          path={`${path}/delivery-address`}
          component={DeliveryAddress}
        />

        <Route exact path={`${path}/personal-data`} component={PersonalData} />

        <Route exact path={`${path}/payment`} component={Payment} />

        <Route exact path={`${path}/orders`} component={Orders} />

        <Route exact path={`${path}/discussion`} component={Discussion} />

        <Route exact path={`${path}/chat`} component={MobileChat} />
      </Switch>
    </BuyerContentContainer>
  );
};

export default BuyerContent;
