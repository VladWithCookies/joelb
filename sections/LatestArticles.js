import { map, isEmpty } from 'lodash';
import { PAGINATION_LIMIT } from 'constants/base';
import Article from 'components/Article';
import Pagination from 'components/Pagination';

const LatestArticles = ({ data, loading, fetchMore }) => {
  if (loading || isEmpty(data.articleCollection.items)) return null;

  const { articleCollection: { items, offset, total } } = data;

  return (
    <section className="mx-auto mb-16 mt-8 md:my-16">
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
