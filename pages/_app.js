import { IntlProvider } from 'react-intl';
import 'tailwindcss/tailwind.css';

import locales from 'locales';

const App = ({ Component, pageProps, router: { query: { lang } } }) => (
  <IntlProvider
    {...locales[lang]}
    defaultLocale={locales.en.locale}
  >
    <Component {...pageProps} />
  </IntlProvider>
);

export default App;
