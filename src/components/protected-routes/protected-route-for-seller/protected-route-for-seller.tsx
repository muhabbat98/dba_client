import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useRole } from '../../../hooks';

export const ProtectedRouteForSeller: FC<RouteProps> = ({
  children,
  ...rest
}) => {
  const { isBuyer } = useRole();
  console.log(isBuyer);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isBuyer ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};
