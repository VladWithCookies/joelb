import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const Logo = () => (
  <Link href="/">
    <a>
      <FormattedMessage id="app.joelBakerMinistry" />
    </a>
  </Link>
);

export default Logo;
