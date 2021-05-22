import clsx from 'clsx';

const ExternalLink = ({ href, children, ...props }) => {
  const className = props.className || 'underline text-indigo-900';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('cursor-pointer', className)}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
