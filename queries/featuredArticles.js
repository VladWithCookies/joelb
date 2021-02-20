import graphql from 'graphql-tag';

export default graphql`
  query featuredArticles {
    articleCollection(where: { featured: true }) {
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
