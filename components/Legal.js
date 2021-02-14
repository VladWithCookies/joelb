import NavigationLink from './NavigationLink';

const Legal = () => (
  <ul>
    <li>
      <NavigationLink href="/terms">
        Terms
      </NavigationLink>
    </li>
    <li>
      <NavigationLink href="/privacy-policy">
        Privacy Policy
      </NavigationLink>
    </li>
  </ul>
);

export default Legal;
