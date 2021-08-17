import Main from './pages/main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardContainer } from './style';
import Confirm from '../components/confirm';
import Alert from '../components/alert';
import Login from './pages/login';

function Admin() {
  const { path } = useRouteMatch();

  return (
    <DashboardContainer>
      <Switch>
        {/*<Route path={path} component={Main} />*/}
        <Route path={path} component={Login} />
      </Switch>
      <Confirm /> <Alert />
    </DashboardContainer>
  );
}

export default Admin;
