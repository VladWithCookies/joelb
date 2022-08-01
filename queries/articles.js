import graphql from 'graphql-tag';

export default graphql`
  query articles($limit: Int!, $offset: Int!, $language: String!, $category: String) {
    articleCollection(
      limit: $limit,
      skip: $offset,
      where: {
        featured: false,
        language: $language,
        category: {
          en: $category
        }
      }
    ) {
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
            url(transform: { height: 100, width: 100 })
          }
        }
        category {
          en
          sr
          cs
          uk
        }
        cover {
          url(transform:{ height: 400, width: 600 })
        }
      }
    }
  }
`;
