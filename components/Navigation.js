import { FormattedMessage } from 'react-intl';

import NavigationLink from './NavigationLink';

const Navigation = ({ className }) => (
  <ul className={className}>
    <li>
      <NavigationLink
        href="/blog"
        className="mr-10"
      >
        <FormattedMessage id="blog.blog" />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink
        href="/videos"
        className="mr-10"
      >
        <FormattedMessage id="videos.videos" />
      </NavigationLink>
    </li>
    <li>
      <NavigationLink
        href="/about"
        className="mr-10"
      >
        <FormattedMessage id="about.about" />
      </NavigationLink>
    </li>
  </ul>
);

export default Navigation
