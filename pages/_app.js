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
    <IntlProvider
      {...locale}
      defaultLocale="en"
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
