import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Endpoints from './views/Components/Endpoints/'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Endpoints}/>
      <Route path="endpoints" name="Endpoints" component={Endpoints}/>
    </Route>
  </Router>
);
