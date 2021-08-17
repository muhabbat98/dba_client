import Main from './pages/main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardContainer } from './style';
import Confirm from '../components/confirm';
import Alert from '../components/alert';

function Admin() {
  const { path } = useRouteMatch();

  return (
    <DashboardContainer>
      <Switch>
        <Route path={path} component={Main} />
      </Switch>
      <Confirm /> <Alert />
    </DashboardContainer>
  );
}

export default Admin;
