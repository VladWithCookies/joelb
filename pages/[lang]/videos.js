import Error from 'next/error';
import { useIntl } from 'react-intl';
import { isEmpty, get } from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { PAGINATION_LIMIT } from 'constants/base';
import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import VIDEOS from 'queries/videos';
import Videos from 'sections/Videos';

const VideosPage = () => {
  const { formatMessage } = useIntl();
  const { query: { page, lang } } = useRouter();

  const variables = {
    language: lang,
    limit: PAGINATION_LIMIT,
    offset: page ? PAGINATION_LIMIT * (page - 1) : 0,
  };

  const videosResponse = useQuery(VIDEOS, { variables });
  const isBlank = !videosResponse.loading && isEmpty(get(videosResponse, ['data', 'videoCollection', 'items']));

  if (isBlank) {
    return <Error statusCode={404} />
  }

  return (
    <Main title={formatMessage({ id: 'videos.videos' })}>
      <Videos {...videosResponse} />
    </Main>
  );
};

export default withApollo({ ssr: true })(VideosPage);
