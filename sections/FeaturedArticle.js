import Link from 'next/link';
import { useQuery } from '@apollo/client';

import FEATURED_ARTICLES from '../queries/featuredArticles';
import { asDate } from '../utils/dates';
import Meta from '../components/Meta';
import Image from '../components/Image';
import Title from '../components/Title';
import Author from '../components/Author';
import Description from '../components/Description';

const FeaturedArticle = () => {
  const { data, loading }  = useQuery(FEATURED_ARTICLES);

  if (loading) return null;

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
    <section className="mx-auto">
      <div className="container px-4">
        <Link href={`/articles/${slug}`}>
          <article className="grid grid-cols-1 md:grid-cols-2 shadow-sm cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg mt-16">
            <Image
              src={cover.url}
              className="w-full h-72 md:h-96"
            />
            <div className="flex flex-col justify-between bg-white h-72 p-4 md:h-96 md:p-8">
              <div>
                <Title className="lg:text-4xl">
                  {title}
                </Title>
                <Meta className="mt-4">
                  {category.name} | {asDate(date)}
                </Meta>
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
