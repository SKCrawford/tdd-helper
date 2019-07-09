import * as React from 'react';
import { Router } from 'react-router-dom';

import { history } from '../router';

export const App: React.SFC = () => (
  <Router history={history}>
    <div>hello, world!</div>
  </Router>
);
