import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { EN_LANGUAGE, CS_LANGUAGE, SR_LANGUAGE } from 'constants/base';

const LanguageSelect = ({ className }) => {
  const { formatMessage } = useIntl();
  const { push, pathname, query } = useRouter();
  const [language, setLanguage] = useState(query.lang);

  useEffect(() => {
    setLanguage(query.lang);
  }, [query]);

  const handleChange = ({ target: { value } }) => {
    push({ pathname, query: { ...query, lang: value } });
    setLanguage(value);
  }

  return (
    <select
      value={language}
      onChange={handleChange}
      aria-label={formatMessage({ id: 'app.language' })}
      className={clsx('cursor-pointer bg-transparent', className)}
    >
      <option value={EN_LANGUAGE}>
        English
      </option>
      <option value={SR_LANGUAGE}>
        Srpski
      </option>
      <option value={CS_LANGUAGE}>
        Čeština
      </option>
    </select>
  );
};

export default LanguageSelect;
