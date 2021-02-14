import clsx from 'clsx';

import Image from './Image';

const Author = ({
  className,
  author: {
    avatar,
    name
  },
}) => (
  <div className={clsx('flex items-center', className)}>
    <Image
      src={avatar.url}
      className="h-14 w-14 rounded-full"
    />
    <p className="font-medium ml-4">
      {name}
    </p>
  </div>
);

export default Author;
