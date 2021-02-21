import NextImage from 'next/image'

const Image = ({ className, ...props }) => (
  <NextImage
    {...props}
    layout="fill"
    objectFit="cover"
    className={className}
    alt=""
  />
);

export default Image;
