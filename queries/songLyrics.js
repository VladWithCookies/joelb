import graphql from 'graphql-tag';

export default graphql`
  query songLyrics($number: Int!) {
    songCollection(where: { number: $number }, limit: 10) {
      items {
        title
        number
        youTubeUrl
        lyrics {
          json
          links {
            entries {
              block {
                sys {
                  id
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;
