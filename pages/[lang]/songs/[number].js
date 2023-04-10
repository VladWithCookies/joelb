import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import SONGS_LYRICS from 'queries/songLyrics';
import SongLyrics from 'sections/SongLyrics';

const SongPage = () => {
  const { query: { number } } = useRouter();
  const response = useQuery(SONGS_LYRICS, { variables: { number: Number(number) } });
  const name = get(response, ['data', 'songCollection', 'items', 0, 'name']);

  return (
    <Main title={name}>
      <SongLyrics {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(SongPage);
