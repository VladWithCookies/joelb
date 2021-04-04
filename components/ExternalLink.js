const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer underline text-indigo-900"
  >
    {children}
  </a>
);

export default ExternalLink;
