const IndexPage = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', '/en/blog');
  res.statusCode = 302;
  res.end();

  return { props: {} };
};

export default IndexPage;
