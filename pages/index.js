import Error from 'next/error';
import { isEmpty, get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { PAGINATION_LIMIT } from '../constants';
import ARTICLES from '../queries/articles';
import FEATURED_ARTICLES from '../queries/featuredArticles';
import withApollo from '../lib/apolloClient';
import Main from '../layouts/Main';
import FeaturedArticle from '../sections/FeaturedArticle';
import LatestArticles from '../sections/LatestArticles';

const IndexPage = () => {
  const { query: { page } } = useRouter();

  const variables = {
    limit: PAGINATION_LIMIT,
    offset: page ? PAGINATION_LIMIT * (page - 1) : 0,
  };

  const isFeaturedArticleVisible = !page || page < 2;
  const articlesResponse = useQuery(ARTICLES, { variables });
  const featuredArticlesResponse  = useQuery(FEATURED_ARTICLES);

  if (!articlesResponse.loading && isEmpty(get(articlesResponse, ['data', 'articleCollection', 'items']))) {
    return <Error statusCode={404} />
  }

  return (
    <Main title="Blog">
      {isFeaturedArticleVisible && <FeaturedArticle {...featuredArticlesResponse} />}
      <LatestArticles {...articlesResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(IndexPage);
