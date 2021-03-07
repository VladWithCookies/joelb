import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EN_LANGUAGE, CS_LANGUAGE, SR_LANGUAGE } from 'constants/base';

const LanguageSelect = ({ className }) => {
  const { push, pathname, query } = useRouter();
  const [language, setLanguage] = useState(query.lang);

  const handleChange = ({ target: { value } }) => {
    push({ pathname, query: { ...query, lang: value } });
    setLanguage(value);
  }

  return (
    <select
      value={language}
      aria-label="Language"
      onChange={handleChange}
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
