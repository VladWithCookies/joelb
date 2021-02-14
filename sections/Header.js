import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import LanguageSelect from '../components/LanguageSelect';
import MobileNavigation from '../components/MobileNavigation';

const Header = () => (
  <header className="bg-white shadow-sm fixed w-full">
    <div className="container flex justify-between mx-auto p-4">
      <Logo />
      <div className="flex">
        <Navigation className="hidden md:flex" />
        <MobileNavigation />
        <LanguageSelect className="hidden md:block" />
      </div>
    </div>
  </header>
);

export default Header;
