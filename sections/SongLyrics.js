import Video from 'components/Video';
import Content from 'components/Content';

const SongLyrics = ({ data, loading }) => {
  if (loading) return null;

  const {
    songCollection: {
      items: [{
        title,
        number,
        lyrics,
        youTubeUrl,
      }],
    },
  } = data;

  return (
    <section>
      {youTubeUrl && (
        <div className="h-96 bg-black">
          <Video url={youTubeUrl} />
        </div>
      )}
      <div className="container mx-auto px-4 mt-8 mb-16">
        <h1 className="text-4xl">
          {`#${number} ${title}`}
        </h1>
        <Content content={lyrics} />
      </div>
    </section>
  )
};

export default SongLyrics;
