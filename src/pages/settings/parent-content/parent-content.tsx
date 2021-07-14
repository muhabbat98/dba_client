import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Settings from '../settings';

import { ParentContentContainer } from './style';

const ParentContent = () => {
   const { path } = useRouteMatch();
   console.log("ParentContent path = ", path);

   return (
      <ParentContentContainer>
         <Switch>
            <Route exact path={path} component={Settings} />
         </Switch>
      </ParentContentContainer>
   )
}

export default ParentContent;
