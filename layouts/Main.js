import Head from 'next/head';
import { map } from 'lodash';
import Error from 'next/error';

import { CLIENT_URL } from 'constants/base';
import Header from 'sections/Header';
import Footer from 'sections/Footer';

const Main = ({ title, translations, isNotFound, children }) => (
  <>
    <Head>
      <title>{title} | Joel Baker Ministry</title>
      <meta name="author" content="Vlad V" />
      <meta name="description" content="Joel Baker Ministry" />
      <link rel="canonical" href="joel-baker-ministry.vercel.app"/>
      {map(translations, ({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" href={`${CLIENT_URL}${href}`} hreflang={hreflang} />
      ))}
    </Head>
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col flex-grow bg-gray-100 pt-14">
        {isNotFound ? <Error statusCode={404} /> : children}
      </main>
      <Footer />
    </div>
  </>
);

export default Main;
