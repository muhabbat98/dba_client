import Main from './pages/main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardContainer, Section } from './style';

function Admin() {
  const { path } = useRouteMatch();

  return (
    <DashboardContainer>
      <Switch>
        <Route exact path={path} component={Main} />
      </Switch>
    </DashboardContainer>
  );
}

export default Admin;
