import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExternalLink from './ExternalLink';

const Contacts = ({ className }) => (
  <ul className={className}>
    <li>
      <a
        href="mailto:bakersjn@gmail.com"
        className="underline cursor-pointer"
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faEnvelope}
        />
        bakersjn@gmail.com
      </a>
    </li>
    <li>
      <ExternalLink
        href="https://www.youtube.com/channel/UC9OFPod3nTa4lpb2NS6Om-Q"
        className="underline cursor-pointer"
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faYoutube}
        />
        Joel Baker Ministries
      </ExternalLink>
    </li>
  </ul>
);

export default Contacts;
