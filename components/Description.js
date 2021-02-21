import clsx from 'clsx';

const Description = ({ children, className }) => (
  <p className={clsx('text-sm md:text-base h-20', className)}>
    {children}
  </p>
);

export default Description;
