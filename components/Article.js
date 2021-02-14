import Link from 'next/link';

import { asDate } from '../utils/dates';
import Meta from './Meta';
import Image from './Image';
import Title from './Title';
import Author from './Author';
import Description from './Description';

const Article = ({
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
  <Link href={`/articles/${slug}`}>
    <article className="bg-white cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg">
      <Image
        src={cover.url}
        className="w-full h-72"
      />
      <div className="flex flex-col justify-between p-4 h-72">
        <div>
          <Title className="text-2xl">
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
);

export default Article;
