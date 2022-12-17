import clsx from 'clsx';

const Description = ({ children, className }) => (
  <p className={clsx('text-sm md:text-base text-gray-700 dark:text-gray-400 h-20', className)}>
    {children}
  </p>
);

export default Description;
