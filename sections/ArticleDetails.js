import { FormattedMessage, FormattedDate } from 'react-intl';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Meta from 'components/Meta';
import Image from 'components/Image';
import Title from 'components/Title';
import Content from 'components/Content';
import Button from 'components/Button';

const ArticleDetails = ({ loading, data }) => {
  if (loading) return null;

  const {
    articleCollection: {
      items: [{
        date,
        title,
        cover,
        author,
        content,
        category,
        document,
      }],
    },
  } = data;

  return (
    <section>
      <div className="relative w-full h-96">
        <Image src={cover.url} />
      </div>
      <div className="grid lg:grid-cols-3 grid-col-1 container mx-auto px-4">
        <div className="lg:col-span-2 my-8">
          <Meta className="text-gray-900">
            {category.name} | <FormattedDate value={date} month="short" day="numeric" year="numeric" />
          </Meta>
          <Title className="text-2xl lg:text-4xl mt-4">
            {title}
          </Title>
          <Content
            className="mt-4"
            content={content}
          />
        </div>
        <div className="flex flex-row-reverse lg:mt-8">
          <Button
            as="a"
            href={document.url}
            download={document.fileName}
            className="w-full h-11 lg:w-72 lg:inline"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faFileDownload}
            />
            <FormattedMessage id="blog.downloadDocument" />
          </Button>
        </div>
      </div>
      <div className="container flex items-center mx-auto px-4 my-8">
        <div className="relative w-16 h-16 lg:w-32 lg:h-32">
          <Image
            src={author.avatar.url}
            className="rounded-full"
          />
        </div>
        <div className="ml-8">
          <p className="text-xl lg:text-2xl">
            {author.name}
          </p>
          <p className="mt-2 max-w-lg hidden lg:block">
            {author.info}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
