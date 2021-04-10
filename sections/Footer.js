import { FormattedMessage } from 'react-intl';

import Legal from 'components/Legal';
import Credits from 'components/Credits';
import Copyright from 'components/Copyright';
import NavigationLink from 'components/NavigationLink';

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="text-lg py-8">
        <FormattedMessage id="app.joelBakerMinistry" />
      </div>
      <hr />
      <div className="flex py-8 leading-loose">
        <ul className="text-lg w-1/2 lg:w-1/4">
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
        <Legal />
      </div>
      <div className="flex flex-col items-center">
        <Credits />
        <Copyright className="mt-8" />
      </div>
    </div>
  </footer>
);

export default Footer;
