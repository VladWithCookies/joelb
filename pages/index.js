import { isEmpty } from 'lodash';

import Main from '../layouts/Main';
import EmptyState from '../sections/EmptyState';
import FeaturedArticle from '../sections/FeaturedArticle';
import LatestArticles from '../sections/LatestArticles';

const IndexPage = ({ featuredArticle, articles }) => (
  <Main title="Home">
    {featuredArticle && <FeaturedArticle />}
    {isEmpty(articles) ? <EmptyState entity="articles" /> : <LatestArticles articles={articles} />}
  </Main>
);

export default IndexPage;
