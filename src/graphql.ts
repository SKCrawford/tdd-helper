import ApolloClient from 'apollo-boost';

/** The GraphQL client for interacting with the NestJS API server. */
export const client = new ApolloClient({
  request: async operation => {
    const token: string = localStorage.getItem('token') || '';
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  uri: 'http://localhost:8001/graphql',
});
