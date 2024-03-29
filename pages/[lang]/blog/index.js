import { get } from 'lodash';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { CLIENT_URL, PAGINATION_LIMIT } from 'constants/base';
import ARTICLES from 'queries/articles';
import FEATURED_ARTICLES from 'queries/featuredArticles';
import withApollo from 'lib/apolloClient';
import use404 from 'hooks/use404';
import Main from 'layouts/Main';
import FeaturedArticle from 'sections/FeaturedArticle';
import LatestArticles from 'sections/LatestArticles';

const IndexPage = () => {
  const { formatMessage } = useIntl();
  const { asPath, query: { page, lang, category } } = useRouter();

  const variables = {
    category,
    language: lang,
    limit: PAGINATION_LIMIT,
    offset: page ? PAGINATION_LIMIT * (page - 1) : 0,
  };

  const articlesResponse = useQuery(ARTICLES, { variables });
  const featuredArticlesResponse  = useQuery(FEATURED_ARTICLES, { variables: { language: lang } });
  const path = ['data', 'articleCollection', 'items'];
  const isNotFound = use404({ response: articlesResponse, path });

  const isFeaturedArticleVisible = (!page || page < 2) && !category;

  const translations = [
    { href: '/sr/blog', hreflang: 'sr-rs' },
    { href: '/sr/blog', hreflang: 'sr-me' },
    { href: '/en/blog', hreflang: 'en-us' },
    { href: '/en/blog', hreflang: 'en-gb' },
    { href: '/cs/blog', hreflang: 'cs-cz' },
    { href: '/uk/blog', hreflang: 'uk-ua' }
  ];

  const socials = [
    {
      property: 'og:title',
      content: 'Joel Baker Ministry Blog',
    },
    {
      property: 'og:description',
      content: 'We share with you freely 40 years of Bible study notes, articles and videos!',
    },
    {
      property: 'og:image',
      content: get(featuredArticlesResponse, [...path, 0, 'cover', 'url']),
    },
    {
      property: 'og:url',
      content: `${CLIENT_URL}${asPath}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ];

  return (
    <Main
      socials={socials}
      isNotFound={isNotFound}
      translations={translations}
      title={formatMessage({ id: 'blog.blog' })}
    >
      {isFeaturedArticleVisible && <FeaturedArticle {...featuredArticlesResponse} />}
      <LatestArticles {...articlesResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(IndexPage);
