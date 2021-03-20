import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import ARTICLE_DETAILS from 'queries/articleDetails';
import use404 from 'hooks/use404';
import ArticleDetails from 'sections/ArticleDetails';

const ArticlePage = () => {
  const { query: { slug } } = useRouter();
  const response = useQuery(ARTICLE_DETAILS, { variables: { slug }});

  const path = ['data', 'articleCollection', 'items', 0];
  const title = get(response, [...path, 'title']);
  const isNotFound = use404({ response, path });

  return (
    <Main
      title={title}
      isNotFound={isNotFound}
    >
      <ArticleDetails {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(ArticlePage);
