import graphql from 'graphql-tag';

export default graphql`
  query articles($limit: Int!, $offset: Int!) {
    articleCollection(limit: $limit, skip: $offset, where: { featured: false }) {
      offset: skip
      total
      items {
        date
        slug
        title
        description
        author {
          name
          avatar {
            url
          }
        }
        category {
          name
        }
        cover {
          url
        }
      }
    }
  }
`;
