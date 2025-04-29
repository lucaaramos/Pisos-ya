// src/components/navbar/Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">Pisos Ya</div>
        <ul className="flex space-x-6 text-gray-800">
          <li><a href="#about" className="hover:text-indigo-600">Sobre Nosotros</a></li>
          <li><a href="#services" className="hover:text-indigo-600">Servicios</a></li>
          <li><a href="#contacto" className="hover:text-indigo-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
