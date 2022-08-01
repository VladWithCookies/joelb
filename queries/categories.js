import graphql from 'graphql-tag';

export default graphql`
  query categories {
    categoryCollection {
      items {
        en
        sr
        cs
        uk
      }
    }
  }
`;
