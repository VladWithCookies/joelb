import graphql from 'graphql-tag';

export default graphql`
  fragment articleAttributes on Article {
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

  query {
    articles: articleCollection(where: { featured: false }) {
      items {
        ...articleAttributes,
      }
    }
    featuredArticles: articleCollection(where: { featured: true }) {
      items {
        ...articleAttributes,
      }
    }
  }
`;
