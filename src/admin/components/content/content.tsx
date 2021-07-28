import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import Goods from '../../pages/goods';
import GoodsItem from '../../pages/goods-item';
import Category from '../../pages/category';
import Sellers from '../../pages/sellers';
import Buyers from '../../pages/buyers';
import AboutSeller from '../../pages/sellers/about-seller'

import { ContentContainer } from './style';
import Moderator from '../../../admin/pages/moderator';

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

        <Route exact path={`${path}/moderators`} component={Moderator} />

        <Route exact path={`${path}/buyers`} component={Buyers} />
        <Route exact path={`${path}/sellers`} component={Sellers} />

        <Route exact path={`${path}/sellers/:id`} component={AboutSeller} />
      </Switch>
    </ContentContainer>
  );
};

export default Content;
