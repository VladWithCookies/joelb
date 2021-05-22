import { FormattedMessage } from 'react-intl';

import NavigationLink from './NavigationLink';

const Legal = ({ className }) => (
  <ul className={className}>
    <li>
      <NavigationLink href="/terms">
        <FormattedMessage id="app.terms" />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink href="/privacy-policy">
        <FormattedMessage id="app.privacyPolicy" />
      </NavigationLink>
    </li>
  </ul>
);

export default Legal;
