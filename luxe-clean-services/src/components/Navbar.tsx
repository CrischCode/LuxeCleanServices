import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyData } from './data/content';
import logoImage from '/src/assets/Logo.jpeg';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-[#d9e1f1]/65 sticky top-0 z-50 shadow-xs font-sans">
      <div className="w-full max-w-full mx-auto px-6 sm:px-10 lg:px-16 py-5 flex justify-between items-center">
        
        {/* Logo y Nombre de la empresa */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#d9e1f1] bg-white flex items-center justify-center p-0.5 shadow-xs">
            <img 
              src={logoImage} 
              alt={`${companyData.name} Logo`} 
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="font-bold tracking-tight text-[#192338] text-base sm:text-lg flex items-center gap-1.5">
            <span className="font-light text-[#192338]">DS LUXE CLEAN</span> <span className="font-normal text-[#31487a]">SERVICES</span>
          </div>
        </Link>

        {/* Enlaces Desktop con línea animada en la pestaña activa */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-normal text-sm text-[#192338]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#31487a] font-medium' 
                    : 'text-[#192338]/70'
                }`}
              >
                {link.name}
                {/* Línea animada inferior exclusiva para la pestaña activa */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#31487a] transition-all duration-300 ease-out transform ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`} 
                />
              </Link>
            );
          })}
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#192338] p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu desplegable movil */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-[#d9e1f1] ${
        isOpen ? 'max-h-96 opacity-100 py-4 px-6 shadow-xl' : 'max-h-0 opacity-0 py-0 px-6'
      }`}>
        <div className="space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-2 text-sm ${
                  isActive 
                    ? 'text-[#31487a] font-medium border-l-2 border-[#31487a] pl-3 bg-blue-50/40' 
                    : 'text-[#192338]/70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};