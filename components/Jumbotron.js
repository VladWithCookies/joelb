import clsx from 'clsx';

import Image from './Image';

const Jumbotron = ({ children, image, reversed, className }) => (
  <div className={className}>
    <div className={clsx('container mx-auto flex justify-between items-center flex-col flex-col-reverse xl:flex-row', { 'xl:flex-row-reverse': reversed })}>
      <div className="flex flex-col justify-center max-w-4xl px-4 py-16">
        <p className="text-xl">
          {children}
        </p>
      </div>
      <div className="relative w-full h-96 max-w-xl sm:mx-4 mt-0 sm:mt-16 xl:mt-0">
        <Image src={image} alt="" />
      </div>
    </div>
  </div>
);

export default Jumbotron;
