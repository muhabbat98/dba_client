import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from '../../pages/main';
import AddCategory from '../../pages/add-category';
import Reference from '../../pages/reference';
import Moderator from '../../pages/moderator';
import ModeratorProtectedRoute from '../moderator-protected-route';
import { ContentContainer } from './style';

function Content() {
  const { path } = useRouteMatch();

  return (
    <ContentContainer>
      <Switch>
        <Route exact path={path} component={Main} />
        <Route exact path={`${path}/add-category`} component={AddCategory} />
        <Route exact path={`${path}/references`} component={Reference} />
        <ModeratorProtectedRoute path={`${path}/moderator`}>
          <Moderator />
        </ModeratorProtectedRoute>
      </Switch>
    </ContentContainer>
  );
}

export default Content;
