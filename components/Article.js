import { FormattedDate } from 'react-intl';

import Link from './Link';
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
  <Link href={`/blog/${slug}`}>
    <article className="bg-white cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg">
      <div className="relative w-full h-72">
        <Image src={cover.url} alt="" />
      </div>
      <div className="flex flex-col justify-between p-4 h-72">
        <div>
          <Meta>
            {category.name} | <FormattedDate value={date} month="short" day="numeric" year="numeric" />
          </Meta>
          <Title className="mt-4">
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
);

export default Article;
