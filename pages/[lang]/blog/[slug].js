import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import ARTICLE_DETAILS from 'queries/articleDetails';
import ArticleDetails from 'sections/ArticleDetails';

const ArticlePage = () => {
  const { query: { slug } } = useRouter();
  const articleDetailsResponse = useQuery(ARTICLE_DETAILS, { variables: { slug }});
  const title = get(articleDetailsResponse, ['data', 'articleCollection', 'items', 0, 'title']);

  return (
    <Main title={title}>
      <ArticleDetails {...articleDetailsResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(ArticlePage);
