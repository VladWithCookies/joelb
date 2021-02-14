import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { API_URL } from '../constants';

export default withApollo(
  ({ initialState }) => new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
));
