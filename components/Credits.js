import { FormattedMessage } from 'react-intl';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CREDITS_LINK } from 'constants/base';
import Button from './Button';

const Credits = () => (
  <Button
    as="a"
    inverted
    target="_blank"
    className="w-full md:w-max"
    href={CREDITS_LINK}
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faLink} />
    <span className="ml-2">
      <FormattedMessage id="app.madeWithLoveBy" />
    </span>
    {' '}
    <span className="font-bold">
      DE
    </span>
  </Button>
);

export default Credits;
