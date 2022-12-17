import clsx from 'clsx';

const Button = ({ children, inverted, disabled, className, as, ...props }) => {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      disabled={disabled}
      className={clsx(
        'text-center cursor-pointer border-2 shadow-sm p-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out',
        { 'hover:shadow-lg': !disabled },
        inverted ? 'border-white dark:border-black' : 'border-black dark:border-white',
        !disabled ? (inverted ? 'hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white' : 'hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black') : undefined,
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Button;
