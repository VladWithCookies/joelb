import { FormattedMessage } from 'react-intl';

import { CURRENT_YEAR } from 'constants/base';

const Copyright = ({ className }) => (
  <small className={className}>
    © {CURRENT_YEAR} <FormattedMessage id="app.joelBakerMinistry" />
  </small>
)

export default Copyright
