import clsx from 'clsx';

const Button = ({ children, inverted, className, as, ...props }) => {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      className={clsx(
        'border-2 shadow-sm p-2',
        'hover:shadow-lg',
        'disabled:opacity-50 disabled:bg-white disabled:shadow-none',
        'transition duration-300 ease-in-out',
        inverted ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white',
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
