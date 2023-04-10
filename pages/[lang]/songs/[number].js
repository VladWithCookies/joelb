import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import SONGS_LYRICS from 'queries/songLyrics';
import use404 from 'hooks/use404';
import SongLyrics from 'sections/SongLyrics';

const SongPage = () => {
  const { query: { number } } = useRouter();
  const response = useQuery(SONGS_LYRICS, { variables: { number: Number(number) } });
  const path = ['data', 'songCollection', 'items', 0];
  const { title } = get(response, path, {});
  const isNotFound = use404({ response, path });

  return (
    <Main
      title={title}
      isNotFound={isNotFound}
    >
      <SongLyrics {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(SongPage);
