import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { FormattedDate } from 'react-intl';

import Link from 'components/Link';
import Meta from 'components/Meta';
import Image from 'components/Image';
import Title from 'components/Title';
import Author from 'components/Author';
import Description from 'components/Description';

const FeaturedArticle = ({ data, loading }) => {
  if (loading || isEmpty(data.articleCollection.items)) return null;

  const { query: { lang } } = useRouter();

  const {
    articleCollection: {
      items: [{
        date,
        slug,
        title,
        cover,
        author,
        category,
        description,
      }],
    },
  } = data;

  return (
    <section className="min-w-full">
      <div className="container mx-auto px-4">
        <Link href={`/blog/${slug}`}>
          <article className="grid grid-cols-1 md:grid-cols-2 shadow-sm cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg mt-8 md:mt-16">
            <div className="relative w-full h-72 md:h-96">
              <Image src={cover.url} alt="" />
            </div>
            <div className="flex flex-col justify-between bg-white h-72 p-4 md:h-96 md:p-8">
              <div>
                <Meta>
                  {category[lang]} | <FormattedDate value={date} month="short" day="numeric" year="numeric" />
                </Meta>
                <Title
                  as="h1"
                  className="lg:text-4xl mt-4"
                >
                  {title}
                </Title>
                <Description className="mt-4">
                  {description}
                </Description>
              </div>
              <Author author={author} />
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticle;
