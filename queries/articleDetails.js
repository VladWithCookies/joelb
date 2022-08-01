import graphql from 'graphql-tag';

export default graphql`
  query articleDetails($slug: String!) {
    articleCollection(where: { slug: $slug }) {
      items {
        date
        title
        description
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
          en
          sr
          cs
          uk
        }
        cover {
          url(transform:{ height: 1200, width: 1600 })
        }
      }
    }
  }
`;
