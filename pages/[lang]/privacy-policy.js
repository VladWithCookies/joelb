import { useIntl } from 'react-intl';

import Main from 'layouts/Main';
import withApollo from 'lib/apolloClient';
import PrivacyPolicy from 'sections/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main
      title={formatMessage({ id: 'privacyPolicy.privacyPolicy' })}
      noIndex
    >
      <PrivacyPolicy />
    </Main>
  );
};

export default withApollo({ ssr: true })(PrivacyPolicyPage);
