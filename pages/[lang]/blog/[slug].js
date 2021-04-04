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

  const translations = [
    { href: `/sr/blog/${slug}`, hreflang: 'sr-rs' },
    { href: `/sr/blog/${slug}`, hreflang: 'sr-me' },
    { href: `/en/blog/${slug}`, hreflang: 'en-us' },
    { href: `/en/blog/${slug}`, hreflang: 'en-gb' },
    { href: `/cs/blog/${slug}`, hreflang: 'cs-cz' },
  ];

  return (
    <Main
      title={title}
      isNotFound={isNotFound}
      translations={translations}
    >
      <ArticleDetails {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(ArticlePage);
