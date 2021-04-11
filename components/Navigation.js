import { FormattedMessage } from 'react-intl';

import LanguageSelect from './LanguageSelect';
import CategorySelect from './CategorySelect';
import NavigationLink from './NavigationLink';

const Navigation = ({ className }) => (
  <ul className={className}>
    <li className="mr-10">
      <NavigationLink href="/blog">
        <FormattedMessage id="blog.blog" />
      </NavigationLink>
    </li>
    <li className="mr-10">
      <CategorySelect />
    </li>
    <li className="mr-10">
      <NavigationLink href="/videos">
        <FormattedMessage id="videos.videos" />
      </NavigationLink>
    </li>
    <li className="mr-10">
      <NavigationLink href="/about">
        <FormattedMessage id="about.about" />
      </NavigationLink>
    </li>
    <li>
      <LanguageSelect />
    </li>
  </ul>
);

export default Navigation
