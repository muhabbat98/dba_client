import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import Goods from '../../pages/goods';
import Category from '../../pages/category';

import { ContentContainer } from './style';

const Content = () => {
  const { path } = useRouteMatch();

  console.log('path - ', path);
  console.log('${path}/category - ', `${path}/category`);
  console.log('`${path}/goods` - ', `${path}/goods`);

  return (
    <ContentContainer>
      <Switch>
        <Route exact path={path} component={Homepage} />
        <Route exact path={`${path}/category`} component={Category} />
        <Route exact path={`${path}/goods`} component={Goods} />
      </Switch>
    </ContentContainer>
  );
};

export default Content;
