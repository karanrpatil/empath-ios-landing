import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first then scroll
      window.location.href = '/#' + sectionId;
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = () => (
    <>
      <button 
        onClick={() => handleNavClick('features')} 
        className="text-gray-600 hover:text-wisdom-600 transition-colors"
      >
        Features
      </button>
      <button 
        onClick={() => handleNavClick('benefits')} 
        className="text-gray-600 hover:text-wisdom-600 transition-colors"
      >
        Benefits
      </button>
      <button 
        onClick={() => handleNavClick('testimonials')} 
        className="text-gray-600 hover:text-wisdom-600 transition-colors"
      >
        Testimonials
      </button>
      <a 
        href="https://apps.apple.com/us/app/myempath/id6472873287"
        target="_blank"
        rel="noopener noreferrer" 
        className="bg-wisdom-600 text-white px-6 py-2 rounded-full hover:bg-wisdom-700 transition-all duration-300 hover:shadow-md"
      >
        Download App
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8 text-wisdom-400" />
            <span className="text-xl font-serif font-bold text-gray-900">Empath</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}