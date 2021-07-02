import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '../../../hooks';
import { checkUSer } from '../../utils/checkUser';

const AdminProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const admin = useSelector((state) => checkUSer(state.user));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect to={{ pathname: '/admin', state: { from: location } }} />
        )
      }
    />
  );
};

export default AdminProtectedRoute;
