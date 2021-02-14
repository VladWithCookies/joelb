import clsx from 'clsx';

const Meta = ({ className, children }) => (
  <p className={clsx('text-gray-400', className)}>
    {children}
  </p>
);

export default Meta;
