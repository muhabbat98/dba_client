import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useRole, UserRole } from '../../../hooks';

export const ProtectedRouteForSeller: FC<RouteProps> = ({
  children,
  ...rest
}) => {
  const { userRole } = useRole();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userRole === UserRole.SELLER ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};