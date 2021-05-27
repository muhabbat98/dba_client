import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PersonalInfo from '../pages/personal-info';
import DeliveryAddress from '../pages/delivery-address';
import Notifications from '../pages/notifications';
import ChangePassword from '../pages/change-password';
import Payment from '../pages/payment';
import Orders from '../pages/orders';
import Discussion from '../pages/discussion';
import { ContentContainer } from './style';

const Content = () => {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <ContentContainer>
      <Switch>
        <Route exact path={`${path}/`} component={PersonalInfo} />
        <Route
          exact
          path={`${path}/delivery-address`}
          component={DeliveryAddress}
        />
        <Route exact path={`${path}/notifications`} component={Notifications} />
        <Route
          exact
          path={`${path}/change-password`}
          component={ChangePassword}
        />
        <Route exact path={`${path}/payment`} component={Payment} />
        <Route exact path={`${path}/orders`} component={Orders} />
        <Route exact path={`${path}/discussion`} component={Discussion} />
      </Switch>
    </ContentContainer>
  );
};

export default Content;
