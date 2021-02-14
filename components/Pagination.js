import clsx from 'clsx';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';

const Pagination = ({ className }) => (
  <div className={clsx('flex justify-between items-center w-full', className)}>
    <Button
      as="a"
      href="/"
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faLongArrowAltLeft}
      />
      Prev posts
    </Button>
    <p className="text-xl">
      2/10
    </p>
    <Button
      as="a"
      href="/"
    >
      Next posts
      <FontAwesomeIcon
        className="ml-2"
        icon={faLongArrowAltRight}
      />
    </Button>
  </div>
);

export default Pagination;
