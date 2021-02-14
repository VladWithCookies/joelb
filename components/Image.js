import clsx from 'clsx';

const Image = ({ src, className }) => (
  <img
    src={src}
    className={clsx('object-cover w-full', className)}
    alt=""
  />
);

export default Image;
