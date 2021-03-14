import { useIntl } from 'react-intl';

import Main from 'layouts/Main';
import Terms from 'sections/Terms';

const TermsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main title={formatMessage({ id: 'app.terms' })}>
      <Terms />
    </Main>
  );
};

export default TermsPage;
