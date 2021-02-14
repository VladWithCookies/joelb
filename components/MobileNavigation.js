import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileNavigation = () => (
  <button
    type="button"
    className="flex md:hidden"
  >
    <FontAwesomeIcon
      size="lg"
      icon={faBars}
    />
  </button>
);

export default MobileNavigation;
