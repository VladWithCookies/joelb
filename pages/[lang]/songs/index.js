import { useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import SONGS from 'queries/songs';
import Songs from 'sections/Songs';

const SongsPage = () => {
  const { formatMessage } = useIntl();
  const response = useQuery(SONGS);

  return (
    <Main title={formatMessage({ id: 'app.songs' })}>
      <Songs {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(SongsPage);
