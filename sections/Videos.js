import { map, isEmpty } from 'lodash';

import { PAGINATION_LIMIT } from 'constants/base';
import Pagination from 'components/Pagination';
import Video from 'components/Video';

const Videos = ({ data, loading, fetchMore }) => {
  if (loading || isEmpty(data.videoCollection.items)) return null;

  const { videoCollection: { items, offset, total } } = data;

  return (
    <section className="flex justify-center mb-16 mt-8 md:mt-6 md:my-16">
      <div className="container px-4">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 md:mt-6 min-h-screen">
          {map(items, ({ url }) => (
            <li key={url}>
              <Video url={url} />
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

export default Videos;
