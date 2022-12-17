import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import MobileNavigation from 'components/MobileNavigation';

const Header = () => (
  <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-10">
    <div className="container flex justify-between mx-auto p-4">
      <Logo />
      <div className="flex">
        <Navigation className="hidden lg:flex" />
        <MobileNavigation />
      </div>
    </div>
  </header>
);

export default Header;
