import Error from 'next/error';
import { get, isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { AVAILABLE_LANGUAGES } from 'constants/base';
import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import ARTICLE_DETAILS from 'queries/articleDetails';
import ArticleDetails from 'sections/ArticleDetails';

const ArticlePage = () => {
  const { query: { slug, lang } } = useRouter();
  const articleDetailsResponse = useQuery(ARTICLE_DETAILS, { variables: { slug }});
  const articleDetailsData = get(articleDetailsResponse, ['data', 'articleCollection', 'items', 0]);
  const title = get(articleDetailsData, 'title');
  const isBlank = !articleDetailsResponse.loading && isEmpty(articleDetailsData);
  const isUnknownLanguage = !AVAILABLE_LANGUAGES.includes(lang);

  if (isBlank || isUnknownLanguage) {
    return <Error statusCode={404} />
  }

  return (
    <Main title={title}>
      <ArticleDetails {...articleDetailsResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(ArticlePage);
