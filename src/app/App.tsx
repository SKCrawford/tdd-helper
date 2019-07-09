import { ApolloProvider } from 'react-apollo-hooks';
import * as React from 'react';
import { Router } from 'react-router-dom';

import { client } from '../graphql';
import { history } from '../router';

export const App: React.SFC = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <div>hello, world!</div>
    </Router>
  </ApolloProvider>
);
