import { useIntl } from 'react-intl';

import withApollo from 'lib/apolloClient';
import Main from 'layouts/Main';
import Terms from 'sections/Terms';

const TermsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main
      title={formatMessage({ id: 'terms.terms' })}
      noIndex
    >
      <Terms />
    </Main>
  );
};

export default  withApollo({ ssr: true })(TermsPage);
