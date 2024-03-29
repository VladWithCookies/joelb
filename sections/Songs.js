import { map, isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';

import NavigationLink from 'components/NavigationLink';

const Songs = ({ data, loading }) => {
  if (loading || isEmpty(data.songCollection.items)) return null;

  const { songCollection: { items } } = data;

  return (
    <section className="container mx-auto px-4 my-8">
      <h1 className="text-4xl">
        <FormattedMessage id="songs.songs" />
      </h1>
      <ul>
        {map(items, ({ title, number }) => (
          <li
            key={number}
            className="mt-4"
          >
            <NavigationLink
              href={`/songs/${number}`}
              className="text-2xl underline"
            >
              {`#${number} ${title}`}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Songs;
