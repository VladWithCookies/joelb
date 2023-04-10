import { FormattedMessage } from 'react-intl';

import { DROPBOX_STUDY_NOTES_LINK, DROPBOX_PHOTOS_LINK } from 'constants/base';
import Contacts from 'components/Contacts';
import Copyright from 'components/Copyright';
import NavigationLink from 'components/NavigationLink';
import ExternalLink from 'components/ExternalLink';

const Footer = () => (
  <footer className="bg-black dark:bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="py-8">
        <FormattedMessage id="app.joelBakerMinistry" />
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row py-8 leading-loose justify-between">
        <div className="flex lg:w-1/2">
          <ul className="w-1/2">
            <li>
              <NavigationLink
                href="/blog"
                className="mr-10"
              >
                <FormattedMessage id="blog.blog" />
              </NavigationLink>
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
                href="/songs"
                className="mr-10"
              >
                <FormattedMessage id="songs.songs" />
              </NavigationLink>
            </li>
          </ul>
          <ul className="w-1/2">
            <li>
              <NavigationLink
                href="/about"
                className="mr-10"
              >
                <FormattedMessage id="about.about" />
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href="/terms">
                <FormattedMessage id="terms.terms" />
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href="/privacy-policy">
                <FormattedMessage id="privacyPolicy.privacyPolicy" />
              </NavigationLink>
            </li>
          </ul>
        </div>
        <Contacts className="mt-8 lg:mt-0" />
      </div>
      <div className="flex flex-col items-center">
        <Copyright className="mt-8" />
      </div>
    </div>
  </footer>
);

export default Footer;
