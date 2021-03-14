import Error from 'next/error';

import Main from 'layouts/Main';

const NotFoundPage = () => (
  <Main>
    <Error statusCode={404} />
  </Main>
);

export default NotFoundPage;
