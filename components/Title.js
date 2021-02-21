import clsx from 'clsx';

const Title = ({ children, className }) => (
  <p className={clsx('md:text-lg lg:text-xl', className)} >
    {children}
  </p>
);

export default Title;
