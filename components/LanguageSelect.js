import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { EN_LANGUAGE, CS_LANGUAGE, SR_LANGUAGE, UK_LANGUAGE } from 'constants/base';
import Select from './Select';

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
    <Select
      value={language}
      className={className}
      onChange={handleChange}
      ariaLabel={formatMessage({ id: 'app.language' })}
      options={[
        { value: EN_LANGUAGE, label: 'English' },
        { value: SR_LANGUAGE, label: 'Srpski' },
        { value: CS_LANGUAGE, label: 'Čeština' },
        { value: UK_LANGUAGE, label: 'Українська' }
      ]}
    />
  );
};

export default LanguageSelect;
