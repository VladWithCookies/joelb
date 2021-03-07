const Index = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', '/en');
  res.statusCode = 302;
  res.end();

  return { props: {} };
};

export default Index;
