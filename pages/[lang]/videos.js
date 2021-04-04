import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { PAGINATION_LIMIT } from 'constants/base';
import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import VIDEOS from 'queries/videos';
import use404 from 'hooks/use404';
import Videos from 'sections/Videos';

const VideosPage = () => {
  const { formatMessage } = useIntl();
  const { query: { page, lang } } = useRouter();

  const variables = {
    language: lang,
    limit: PAGINATION_LIMIT,
    offset: page ? PAGINATION_LIMIT * (page - 1) : 0,
  };

  const response = useQuery(VIDEOS, { variables });
  const isNotFound = use404({ response, path: ['data', 'videoCollection', 'items'] });

  return (
    <Main
      isNotFound={isNotFound}
      title={formatMessage({ id: 'videos.videos' })}
    >
      <h1 hidden>
        <FormattedMessage id="videos.videos" />
      </h1>
      <Videos {...response} />
    </Main>
  );
};

export default withApollo({ ssr: true })(VideosPage);
