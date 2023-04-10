import clsx from 'clsx';
import Image from 'next/image'
import { useMemo } from 'react';
import { split, flatMap } from 'lodash';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Content = ({ content, className }) => {
  const options = useMemo(() => {
    const assets = new Map();

    for (const asset of content.links.assets.block) {
      assets.set(asset.sys.id, asset);
    }

    return {
      renderText: (text) => flatMap(split(text, '\n'), (text, i) => [i > 0 && <br />, text]),
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { url, height, width } = assets.get(node.data.target.sys.id);

          return (
            <Image
              src={url}
              height={height}
              width={width}
              alt=""
            />
          );
        }
      }
    };
  }, []);

  return (
    <div className={clsx('unreset', className)}>
      {documentToReactComponents(content.json, options)}
    </div>
  );
}

export default Content;
