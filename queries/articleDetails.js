import graphql from 'graphql-tag';

export default graphql`
  query articleDetails($slug: String!) {
    articleCollection(where: { slug: $slug }) {
      items {
        date
        title
        content {
          json
        }
        author {
          name
          info
          avatar {
            url(transform: { height: 300, width: 300 })
          }
        }
        document {
          url
          fileName
        }
        category {
          name
        }
        cover {
          url(transform:{ height: 900, width: 1440 })
        }
      }
    }
  }
`;
