import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '../../hooks';
import { checkUSer } from '../../utils/check-user';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const user = useSelector((state) => checkUSer(state.user));
  //const user = true;
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

export default ProtectedRoute;
