import Link from 'next/link';

import Error from '../components/Error';

const NotFound = () => (
  <section className="container flex justify-center items-center">
    <Error
      title="Page not found"
      description="Sorry we couldn’t find what you were looking for..."
    >
      <Link
        href="/"
        className="underline leading-loose"
      >
        Take me home
      </Link>
    </Error>
  </section>
);

export default NotFound;
