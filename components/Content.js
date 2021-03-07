import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Content = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json) }}
  />
);

export default Content;
