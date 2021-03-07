import graphql from 'graphql-tag';

export default graphql`
  query featuredArticles($language: String!) {
    articleCollection(where: { featured: true, language: $language }) {
      items {
        date
        slug
        title
        description
        author {
          name
          avatar {
            url(transform: { height: 100, width: 100 })
          }
        }
        category {
          name
        }
        cover {
          url(transform:{ height: 384, width: 624 })
        }
      }
    }
  }
`;
