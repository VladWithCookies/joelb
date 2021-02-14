const EmptyState = ({ entity }) => (
  <section className="text-center">
    <p className="py-8">
      There are no {entity} for your request
    </p>
  </section>
);

export default EmptyState;
