import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DROPBOX_STUDY_NOTES_LINK, DROPBOX_PHOTOS_LINK } from 'constants/base';
import CategorySelect from './CategorySelect';
import LanguageSelect from './LanguageSelect';
import NavigationLink from './NavigationLink';
import ExternalLink from './ExternalLink';

const MobileNavigation = () => {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const [isOpened, setIsOpened] = useState();

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove('overflow-hidden')
      setIsOpened(false);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, []);

  const onToggleMenu = () => {
    isOpened ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden');
    setIsOpened(!isOpened);
  }

  return (
    <>
      <button
        type="button"
        onClick={onToggleMenu}
        className="flex lg:hidden"
        aria-label={formatMessage({ id: 'app.openMenu' })}
      >
        <FontAwesomeIcon
          size="lg"
          icon={faBars}
        />
      </button>
      <div className="absolute lg:hidden">
        <div className={clsx(
          'm-0 py-20 fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center transform',
          isOpened ? 'translate-x-0' : 'translate-x-full',
          { 'transition-transform duration-300': isOpened !== undefined },
        )}>
          <ul className="flex flex-col flex-grow items-center justify-evenly text-2xl py-10">
            <li>
              <NavigationLink href="/blog">
                <FormattedMessage id="blog.blog" />
              </NavigationLink>
            </li>
            <li>
              <CategorySelect className="max-w-180" />
            </li>
            <li>
              <ExternalLink
                href={DROPBOX_STUDY_NOTES_LINK}
                className="transition duration-300 ease-in-out hover:opacity-70"
              >
                <FormattedMessage id="app.studyNotes" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={DROPBOX_PHOTOS_LINK}
                className="transition duration-300 ease-in-out hover:opacity-70"
              >
                <FormattedMessage id="app.photos" />
              </ExternalLink>
            </li>
            <li>
              <NavigationLink href="/videos">
                <FormattedMessage id="videos.videos" />
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href="/about">
                <FormattedMessage id="about.about" />
              </NavigationLink>
            </li>
            <li>
              <LanguageSelect />
            </li>
          </ul>
          <button
            type="button"
            onClick={onToggleMenu}
            className="flex lg:hidden"
            aria-label={formatMessage({ id: 'app.closeMenu' })}
          >
            <FontAwesomeIcon
              size="3x"
              icon={faTimes}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
