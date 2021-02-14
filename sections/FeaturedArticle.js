import Link from 'next/link';

import { asDate } from '../utils/dates';
import Meta from '../components/Meta';
import Image from '../components/Image';
import Title from '../components/Title';
import Author from '../components/Author';
import Description from '../components/Description';

const FeaturedArticle = ({
  article: {
    date,
    slug,
    title,
    cover,
    author,
    category,
    description,
  },
}) => (
  <section className="mx-auto">
    <div className="container px-4">
      <Link href={`/articles/${slug}`}>
        <article className="grid grid-cols-1 md:grid-cols-2 shadow-sm cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg mt-16">
          <Image
            src={cover.url}
            className="w-full h-96"
          />
          <div className="flex flex-col justify-between bg-white h-96 p-8">
            <div>
              <Title className="text-2xl lg:text-4xl">
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

export default FeaturedArticle;
