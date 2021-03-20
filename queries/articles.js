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
          name: $category
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
          name
        }
        cover {
          url(transform:{ height: 288, width: 395 })
        }
      }
    }
  }
`;
