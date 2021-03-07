import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Link = ({ href, children }) => {
  const { query: { lang } } = useRouter();

  return (
    <NextLink href={`/${lang}${href}`}>
      {children}
    </NextLink>
  );
};

export default Link;
