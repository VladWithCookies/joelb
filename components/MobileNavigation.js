import clsx from 'clsx';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LanguageSelect from './LanguageSelect';
import NavigationLink from './NavigationLink';

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onToggleMenu = () => {
    isOpened ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden');
    setIsOpened(!isOpened);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={onToggleMenu}
        className="flex md:hidden"
      >
        <FontAwesomeIcon
          size="lg"
          icon={faBars}
        />
      </button>
      <div className="absolute md:hidden">
        <div className={clsx(
          'm-0 py-20 fixed top-0 left-0 w-full h-full bg-white',
          'flex flex-col items-center',
          'transform transition-transform duration-300',
          isOpened ? 'translate-x-0' : 'translate-x-full'
        )}>
          <ul className="flex flex-col flex-grow items-center justify-evenly text-2xl py-10">
            <li>
              <NavigationLink href="/">
                <FormattedMessage id="blog.blog" />
              </NavigationLink>
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
            aria-label="Close menu"
            onClick={onToggleMenu}
            className="flex md:hidden"
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
