import Content from 'components/Content';

const SongLyrics = ({ data, loading }) => {
  if (loading) return null;

  const {
    songCollection: {
      items: [{
        title,
        lyrics
      }],
    },
  } = data;

  return (
    <section className="mx-auto my-8">
      <div className="container px-4 py-8">
        <h1 className="text-4xl">
          {title}
        </h1>
        <Content content={lyrics} />
      </div>
    </section>
  )
};

export default SongLyrics;
