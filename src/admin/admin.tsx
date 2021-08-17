import Main from './pages/main';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DashboardContainer } from './style';
import Confirm from '../components/confirm';
import Alert from '../components/alert';
import SignUp from './pages/signup';
function Admin() {
  const { path } = useRouteMatch();

  return (
    <DashboardContainer>
      <Switch>
        {console.log(path)}
      <Route path={path + "/signup"} exact>  
            <SignUp/>
        </Route>
        <Route path={path} component={Main} />
      </Switch>
      <Confirm /> <Alert />
    </DashboardContainer>
  );
}

export default Admin;
