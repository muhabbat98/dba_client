import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { TemplateContainer } from './style';
import { useParams } from 'react-router-dom';
import TemplateList from './template-list';
import TemplateCreate from './template-create';
import TemplateView from './template-view';

interface Params {
  id: string;
}

const Template = () => {
  const { id } = useParams<Params>();
  const { path } = useRouteMatch();

  console.log('id - ', id);
  return (
    <TemplateContainer>
      <Switch>
        <Route exact path={`${path}/list/:id`}>
          <TemplateList />
        </Route>
        <Route exact path={`${path}/create/:id`}>
          <TemplateCreate />
        </Route>
        <Route exact path={`${path}/view/:id`}>
          <TemplateView />
        </Route>

        <Redirect from={`${path}`} to="/admin" />
      </Switch>
    </TemplateContainer>
  );
};

export default Template;
