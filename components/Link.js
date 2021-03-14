import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { EN_LANGUAGE } from 'constants/base';

const Link = ({ href, children }) => {
  const { query: { lang } } = useRouter();
  const language = lang || EN_LANGUAGE;

  return (
    <NextLink href={`/${language}${href}`}>
      {children}
    </NextLink>
  );
};

export default Link;
