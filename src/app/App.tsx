import * as React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { history } from '../router';
import { theme } from '../theme';

export const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <div>hello, world!</div>
    </Router>
  </ThemeProvider>
);
