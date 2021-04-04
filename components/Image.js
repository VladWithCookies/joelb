import NextImage from 'next/image'

const Image = props => (
  <NextImage
    {...props}
    layout="fill"
    objectFit="cover"
  />
);

export default Image;
