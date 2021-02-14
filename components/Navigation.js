import NavigationLink from './NavigationLink';

const Navigation = ({ className }) => (
  <ul className={className}>
    <li>
      <NavigationLink
        href="/about"
        className="mr-10"
      >
        Blog
      </NavigationLink>
    </li>
    <li>
      <NavigationLink
        href="/videos"
        className="mr-10"
      >
        Videos
      </NavigationLink>
    </li>
    <li>
      <NavigationLink
        href="/about"
        className="mr-10"
      >
        About
      </NavigationLink>
    </li>
  </ul>
);

export default Navigation
