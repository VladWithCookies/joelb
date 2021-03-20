import { isEmpty, get } from 'lodash';
import { useRouter } from 'next/router';

import { AVAILABLE_LANGUAGES } from 'constants/base';

const use404 = ({ response, path }) => {
  const { query: { lang } } = useRouter();

  const isBlank = !response.loading && isEmpty(get(response, path));
  const isUnknownLanguage = !AVAILABLE_LANGUAGES.includes(lang);

  return isBlank || isUnknownLanguage;
};

export default use404;
