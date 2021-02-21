import clsx from 'clsx';

const Button = ({ children, inverted, disabled, className, as, ...props }) => {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      disabled={disabled}
      className={clsx(
        'border-2 shadow-sm p-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out',
        { 'hover:shadow-lg': !disabled },
        inverted ? 'border-white' : 'border-black',
        !disabled ? (inverted ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white') : undefined,
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
