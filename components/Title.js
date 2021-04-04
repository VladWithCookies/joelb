import clsx from 'clsx';

const Title = ({ as, children, className }) => {
  const Component = as || 'p';

  return (
    <Component className={clsx('md:text-lg lg:text-xl', className)} >
      {children}
    </Component>
  );
}

export default Title;
