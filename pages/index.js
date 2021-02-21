import { useRouter } from 'next/router';

import withApollo from '../lib/apolloClient';
import Main from '../layouts/Main';
import FeaturedArticle from '../sections/FeaturedArticle';
import LatestArticles from '../sections/LatestArticles';

const IndexPage = () => {
  const { query: { page } } = useRouter();
  const isFeaturedArticleVisible = !page || page < 2;

  return (
    <Main title="Blog">
      {isFeaturedArticleVisible && <FeaturedArticle />}
      <LatestArticles />
    </Main>
  );
};

export default withApollo({ ssr: true })(IndexPage);
