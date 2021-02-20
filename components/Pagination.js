import clsx from 'clsx';
import { ceil } from 'lodash';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PAGINATION_LIMIT } from '../constants';
import Button from './Button';

const Pagination = ({ offset, total, fetchMore, className }) => {
  const totalPages = ceil(total / PAGINATION_LIMIT);
  const currentPage = ceil(offset / PAGINATION_LIMIT) + 1;
  const updateQuery = (_, { fetchMoreResult }) => fetchMoreResult;

  const handleNext = () => fetchMore({
    variables: { offset: offset + PAGINATION_LIMIT },
    updateQuery,
  });

  const handlePrev = () => fetchMore({
    variables: { offset: offset - PAGINATION_LIMIT },
    updateQuery,
  });

  return (
    <div className={clsx('flex justify-between items-center w-full', className)}>
      <Button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faLongArrowAltLeft}
        />
        Prev posts
      </Button>
      <p className="text-xl">
        {currentPage}/{totalPages}
      </p>
      <Button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next posts
        <FontAwesomeIcon
          className="ml-2"
          icon={faLongArrowAltRight}
        />
      </Button>
    </div>
  );
};

export default Pagination;
