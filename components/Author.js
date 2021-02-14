import clsx from 'clsx';

const Author = ({ image, name, className }) => (
  <div className={clsx('flex items-center', className)}>
    <img
      src={image}
      className="h-14 rounded-full"
      alt=""
    />
    <p className="font-medium ml-4">
      {name}
    </p>
  </div>
);

export default Author;
