
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Rezerwacja', href: '#reservation' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold font-serif transition-colors ${
          isScrolled ? 'text-slate-900' : 'text-white'
        }`}>
          MINELLI
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${
                isScrolled ? 'text-slate-600' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-gold text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
          >
            Rezerwuj stolik
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-slate-900' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-900 text-lg font-medium border-b border-slate-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className="bg-gold text-white text-center py-4 rounded-xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REZERWUJ STOLIK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
