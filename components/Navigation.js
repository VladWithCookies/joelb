import { FormattedMessage } from 'react-intl';

import { DROPBOX_STUDY_NOTES_LINK, DROPBOX_PHOTOS_LINK } from 'constants/base';
import LanguageSelect from './LanguageSelect';
import CategorySelect from './CategorySelect';
import NavigationLink from './NavigationLink';
import ExternalLink from './ExternalLink';

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
      <ExternalLink
        href={DROPBOX_STUDY_NOTES_LINK}
        className="transition duration-300 ease-in-out hover:opacity-70"
      >
        <FormattedMessage id="app.studyNotes" />
      </ExternalLink>
    </li>
    <li className="mr-10">
      <ExternalLink
        href={DROPBOX_PHOTOS_LINK}
        className="transition duration-300 ease-in-out hover:opacity-70"
      >
        <FormattedMessage id="app.photos" />
      </ExternalLink>
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
