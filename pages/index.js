import withApollo from '../lib/apolloClient';
import Main from '../layouts/Main';
import FeaturedArticle from '../sections/FeaturedArticle';
import LatestArticles from '../sections/LatestArticles';

const IndexPage = () => (
  <Main title="Blog">
    <FeaturedArticle />
    <LatestArticles />
  </Main>
);

export default withApollo({ ssr: true })(IndexPage);
