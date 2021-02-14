import clsx from 'clsx';

const Description = ({ children, className }) => (
  <p className={clsx('h-20', className)}>
    {children}
  </p>
);

export default Description;
