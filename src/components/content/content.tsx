import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import { useRole, UserRole, useSelector } from '../../hooks';
import ForSeller from '../../pages/for-seller';
import ForBuyer from '../../pages/for-buyer';

//seller

///seller/settings

const Content = () => {
  const { path } = useRouteMatch();
  const { userRole } = useRole();
  console.log(userRole, 'rtjhtr');
  return (
    <div>
      <Switch>
        <Route path="/seller">
          {userRole === UserRole.SELLER ? <ForSeller /> : <Redirect to="/" />}
        </Route>

        <Route path={path}>
          {userRole === UserRole.BUYER || userRole === null ? (
            <ForBuyer />
          ) : (
            <Redirect to="/seller" />
          )}
        </Route>

        <Redirect to="/" />
        {/*<ProtectedRouteForBuyer exact path="/cart">*/}
        {/*  <Cart />*/}
        {/*</ProtectedRouteForBuyer>*/}

        {/*<ProtectedRouteForBuyer exact path="/wishlist">*/}
        {/*  <Wishlist />*/}
        {/*</ProtectedRouteForBuyer>*/}

        {/*<Route exact path="/product-detail/:id" component={ProductDetail} />*/}
        {/*<Route exact path="/catalog" component={Catalog} />*/}
        {/*<Route exact path="/products" component={Products} />*/}
        {/*<Route exact path="/profile/add-product" component={AddProduct} />*/}
        {/*<ProtectedRoute path="/profile/settings">*/}
        {/*  <Settings />*/}
        {/*</ProtectedRoute>*/}
        {/*<Redirect to="/" />*/}
      </Switch>
    </div>
  );
};

export default Content;
