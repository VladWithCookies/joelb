import clsx from 'clsx';

const Meta = ({ className, children }) => (
  <p className={clsx('text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-300', className)}>
    {children}
  </p>
);

export default Meta;
