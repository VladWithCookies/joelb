import clsx from 'clsx';

const Button = ({ children, inverted, className, as: Component, ...props }) => (
  <Component
    {...props}
    className={clsx(
      'border-2 shadow-sm hover:shadow-lg transition duration-300 ease-in-out p-2',
      inverted ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white',
      className,
    )}
  >
    {children}
  </Component>
);

export default Button;
