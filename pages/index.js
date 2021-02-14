import { isEmpty } from 'lodash';

import INDEX from '../queries';
import Main from '../layouts/Main';
import withApolloClient from '../lib/apolloClient';
import FeaturedArticle from '../sections/FeaturedArticle';
import LatestArticles from '../sections/LatestArticles';

const IndexPage = ({ loading, data: { articles, featuredArticles } }) => {
  const [featuredArticle] = featuredArticles.items;

  return (
    <Main title="Home">
      {featuredArticle && <FeaturedArticle article={featuredArticle} />}
      {!isEmpty(articles.items) && <LatestArticles articles={articles.items} />}
    </Main>
  );
};

IndexPage.getInitialProps = async ({ apolloClient }) => {
  const { data, loading } = await apolloClient.query({ query: INDEX });

  return { data, loading };
};

export default withApolloClient(IndexPage);
