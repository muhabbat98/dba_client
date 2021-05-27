import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '../../../hooks';

const checkUSer = (user: any) => {
  if (
    (user.accessToken &&
      user.tokenType &&
      user.id &&
      user.roles === 'ROLE_MODERATOR') ||
    user.roles === 'ROLE_ADMIN'
  ) {
    return true;
  }

  return false;
};

const AdminProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const user = useSelector((state) => checkUSer(state.user));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};

export default AdminProtectedRoute;