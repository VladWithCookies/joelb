import Head from 'next/head';
import { map } from 'lodash';
import Error from 'next/error';
import { useRouter } from 'next/router';

import { CLIENT_URL } from 'constants/base';
import Header from 'sections/Header';
import Footer from 'sections/Footer';

const Main = ({ title, translations, socials, isNotFound, children, noIndex }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{title} | Joel Baker Ministry</title>
        <meta name="author" content="Vlad V" />
        <meta name="description" content="We share with you freely 40 years of Bible study notes, articles and videos!" />
        <meta name="google-site-verification" content="j5UML0AbfNmNx9pO0_3ZmDEHDQyW7zyy7JmZHR57E6M" />
        {map(socials, (social, index) => (
          <meta key={index} {...social} />
        ))}
        <link rel="canonical" href={`${CLIENT_URL}${asPath}`} />
        {map(translations, ({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" href={`${CLIENT_URL}${href}`} hrefLang={hreflang} />
        ))}
        {noIndex && <meta name="robots" content="noindex" />}
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-col flex-grow bg-gray-100 dark:bg-gray-800 pt-14">
          {isNotFound ? <Error statusCode={404} /> : children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
