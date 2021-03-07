const Index = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', '/en/blog');
  res.statusCode = 302;
  res.end();

  return { props: {} };
};

export default Index;
