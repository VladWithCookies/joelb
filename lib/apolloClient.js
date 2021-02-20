import { withApollo } from 'next-apollo';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { API_URL } from '../constants';

const httpLink = new HttpLink({
  uri: API_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: offsetLimitPagination(),
      },
    },
  },
});

const apolloClient = new ApolloClient({ link: httpLink, cache });

export default withApollo(apolloClient);
