import { map } from 'lodash';
import { useQuery } from '@apollo/client';

import { PAGINATION_LIMIT } from '../constants';
import ARTICLES from '../queries/articles';
import Article from '../components/Article';
import Pagination from '../components/Pagination';

const LatestArticles = () => {
  const { data, loading, fetchMore } = useQuery(ARTICLES, { variables: { limit: PAGINATION_LIMIT, offset: 0 } });

  if (loading) return null;

  const { articleCollection: { items, offset, total } } = data;

  return (
    <section className="mx-auto mt-8 mb-16 md:my-16">
      <div className="container px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {map(items, item => (
            <li key={item.slug}>
              <Article article={item} />
            </li>
          ))}
        </ul>
        {total > PAGINATION_LIMIT && (
          <Pagination
            total={total}
            offset={offset}
            fetchMore={fetchMore}
            className="mt-16"
          />
        )}
      </div>
    </section>
  );
};

export default LatestArticles;
