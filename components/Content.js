import clsx from 'clsx';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Content = ({ content, className }) => (
  <div
    className={clsx('unreset', className)}
    dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json) }}
  />
);

export default Content;
