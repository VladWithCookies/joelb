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
    <div className="relative h-12 w-12 ">
      <Image
        src={avatar.url}
        className="rounded-full"
        alt=""
      />
    </div>
    <p className="font-medium ml-4">
      {name}
    </p>
  </div>
);

export default Author;
