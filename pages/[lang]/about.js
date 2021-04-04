import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import History from 'sections/History';
import Statement from 'sections/Statement';

const AboutPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main title={formatMessage({ id: 'about.about' })}>
      <h1 hidden>
        <FormattedMessage id="about.about" />
      </h1>
      <History />
      <Statement />
    </Main>
  );
};

export default withApollo({ ssr: true })(AboutPage);
