import Legal from '../components/Legal';
import Credits from '../components/Credits';
import Copyright from '../components/Copyright';
import Navigation from '../components/Navigation';

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="py-8">
        Joel Baker Ministry
      </div>
      <hr />
      <div className="flex py-8 leading-loose">
        <Navigation className="w-1/4" />
        <Legal className="w-1/4" />
      </div>
      <div className="flex flex-col items-center">
        <Credits />
        <Copyright className="mt-8" />
      </div>
    </div>
  </footer>
);

export default Footer;
