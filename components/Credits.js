import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CREDITS_LINK } from '../constants';
import Button from './Button';

const Credits = () => (
  <Button
    as="a"
    inverted
    target="_blank"
    className="w-max"
    href={CREDITS_LINK}
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faLink} />
    <span className="ml-2">
      Made with love by
    </span>
    {' '}
    <span className="font-bold">
      DE
    </span>
  </Button>
);

export default Credits;
