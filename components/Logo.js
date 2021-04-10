import { FormattedMessage } from 'react-intl';

import Link from './Link';

const Logo = () => (
  <Link href="/blog">
    <a className="text-lg">
      <FormattedMessage id="app.joelBakerMinistry" />
    </a>
  </Link>
);

export default Logo;
