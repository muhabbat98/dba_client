import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import Goods from '../../pages/goods';
import GoodsItem from '../../pages/goods-item';
import Category from '../../pages/category';

import { ContentContainer } from './style';

const Content = () => {
  const { path } = useRouteMatch();

  return (
    <ContentContainer>
      <Switch>
        <Route exact path={path} component={Homepage} />
        <Route
          exact
          path={[`${path}/category`, `${path}/category/:id`]}
          component={Category}
        />
        <Route exact path={`${path}/goods`} component={Goods} />
        <Route exact path={`${path}/goods-item`} component={GoodsItem} />
      </Switch>
    </ContentContainer>
  );
};

export default Content;
