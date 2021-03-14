import { includes } from 'lodash';
import { IntlProvider } from 'react-intl';
import 'tailwindcss/tailwind.css';
import 'unreset-css/dist/unreset.css';

import locales from 'locales';
import { AVAILABLE_LANGUAGES } from 'constants/base';

const App = ({ Component, pageProps, router: { query: { lang } } }) => {
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
