import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { PAGINATION_LIMIT } from 'constants/base';
import ARTICLES from 'queries/articles';
import FEATURED_ARTICLES from 'queries/featuredArticles';
import withApollo from 'lib/apolloClient';
import use404 from 'hooks/use404';
import Main from 'layouts/Main';
import FeaturedArticle from 'sections/FeaturedArticle';
import LatestArticles from 'sections/LatestArticles';

const IndexPage = () => {
  const { formatMessage } = useIntl();
  const { query: { page, lang } } = useRouter();

  const variables = {
    language: lang,
    limit: PAGINATION_LIMIT,
    offset: page ? PAGINATION_LIMIT * (page - 1) : 0,
  };

  const articlesResponse = useQuery(ARTICLES, { variables });
  const featuredArticlesResponse  = useQuery(FEATURED_ARTICLES, { variables: { language: lang } });
  const isNotFound = use404({ response: articlesResponse, path: ['data', 'articleCollection', 'items'] });

  const isFeaturedArticleVisible = !page || page < 2;

  return (
    <Main
      isNotFound={isNotFound}
      title={formatMessage({ id: 'blog.blog' })}
    >
      {isFeaturedArticleVisible && <FeaturedArticle {...featuredArticlesResponse} />}
      <LatestArticles {...articlesResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(IndexPage);