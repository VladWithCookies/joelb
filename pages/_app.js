import Script from 'next/script';
import { useEffect } from 'react';
import { includes } from 'lodash';
import { IntlProvider } from 'react-intl';
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwindcss/tailwind.css';
import 'unreset-css/dist/unreset.css';
import 'stylesheets/index.css';

import locales from 'locales';
import { AVAILABLE_LANGUAGES } from 'constants/base';

config.autoAddCss = false;

const App = ({ Component, pageProps, router: { query: { lang } } }) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const locale = includes(AVAILABLE_LANGUAGES, lang) ? locales[lang] : locales.en;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <IntlProvider
        {...locale}
        defaultLocale="en"
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
};

export default App;
