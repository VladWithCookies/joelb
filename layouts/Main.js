import Head from 'next/head';

import Header from 'sections/Header';
import Footer from 'sections/Footer';

const Main = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Joel Baker Ministry</title>
      <meta name="author" content="Vlad V" />
      <meta name="description" content="Joel Baker Ministry" />
    </Head>
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col flex-grow bg-gray-100 pt-4 md:pt-14">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Main;
