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
    <section className="container mx-auto px-4 my-8">
      <h1 className="text-4xl">
        {title}
      </h1>
      <Content content={lyrics} />
    </section>
  )
};

export default SongLyrics;
