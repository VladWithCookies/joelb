import graphql from 'graphql-tag';

export default graphql`
  query songs {
    songCollection(order: number_ASC) {
      items {
        number
        title
      }
    }
  }
`;
