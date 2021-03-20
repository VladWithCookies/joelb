import graphql from 'graphql-tag';

export default graphql`
  query videos($limit: Int!, $offset: Int!) {
    videoCollection(limit: $limit, skip: $offset) {
      offset: skip
      total
      items {
        url
      }
    }
  }
`;
