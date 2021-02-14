import clsx from 'clsx';

const Image = ({ src, className }) => (
  <img
    src={src}
    className={clsx('object-cover', className)}
    alt=""
  />
);

export default Image;
