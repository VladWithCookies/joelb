import clsx from 'clsx';
import { useMemo } from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Content = ({ content, className }) => {
  const options = useMemo(() => {
    const assets = new Map();

    for (const asset of content.links.assets.block) {
      assets.set(asset.sys.id, asset);
    }

    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const asset = assets.get(node.data.target.sys.id);

          return <img src={asset.url} alt="" />;
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
