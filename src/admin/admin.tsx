import Main from './pages/main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardContainer } from './style';
import Confirm from '../components/confirm';
import Alert from '../components/alert';
import SignUp from './pages/signup';
import { useActionCreators, useRole, UserRole } from '../hooks';

function Admin() {
  const { path } = useRouteMatch();
  const { setUser } = useActionCreators();
  const { userRole } = useRole();

  return (
    <DashboardContainer>
      <Switch>
        {userRole === UserRole.MODERATOR || userRole === UserRole.ADMIN ? (
          <Route path={path} component={Main} />
        ) : (
          <SignUp />
        )}
      </Switch>
      <Confirm /> <Alert />
    </DashboardContainer>
  );
}

export default Admin;
