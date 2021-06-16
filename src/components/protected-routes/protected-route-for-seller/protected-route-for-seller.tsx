import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useRole } from '../../../hooks';

export const ProtectedRouteForSeller: React.FC<RouteProps> = ({
  children,
  ...rest
}) => {
  const { isBuyer } = useRole();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isBuyer ? (
          children
        ) : (
          <Redirect to={{ pathname: '/settings', state: { from: location } }} />
        )
      }
    />
  );
};
