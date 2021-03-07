import clsx from 'clsx';

import Link from './Link';

const NavigationLink = ({ href, children, className }) => (
  <Link href={href}>
    <a className={clsx('transition duration-300 ease-in-out hover:opacity-70', className)}>
      {children}
    </a>
  </Link>
);

export default NavigationLink;
