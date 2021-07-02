import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ModeratorsReg from './moderators-reg';
import Moderators from './moderators';

const Moderator = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/moderators`} component={Moderators} />
      <Route exact path={`${path}/moderators-reg`} component={ModeratorsReg} />
    </Switch>
  );
};

export default Moderator;
