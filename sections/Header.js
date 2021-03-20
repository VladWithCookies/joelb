import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import MobileNavigation from 'components/MobileNavigation';

const Header = () => (
  <header className="bg-white shadow-sm fixed w-full z-10">
    <div className="container flex justify-between mx-auto p-4">
      <Logo />
      <div className="flex">
        <Navigation className="hidden md:flex" />
        <MobileNavigation />
      </div>
    </div>
  </header>
);

export default Header;
