import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300 ease-in-out 
      ${scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md text-black' 
        : 'bg-black/40 shadow-lg text-white'
      }`}>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-semibold tracking-wide ${scrolled ? 'text-indigo-600' : 'text-white'}`}>
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop menu */}
        <ul className={`hidden md:flex space-x-10 text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
          <li><a href="#about" className="hover:text-indigo-600 transition">Sobre nosotros</a></li>
          <li><a href="#productos" className="hover:text-indigo-600 transition">Productos</a></li>
          <li><a href="#reseñas" className="hover:text-indigo-600 transition">Reseñas</a></li>
          <li><a href="#faq" className="hover:text-indigo-600 transition">FAQ</a></li>
          <li><a href="#contacto" className="hover:text-indigo-600 transition">Contacto</a></li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`text-2xl ${scrolled ? 'text-black' : 'text-white'} focus:outline-none`}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`md:hidden bg-white/95 text-black backdrop-blur-md shadow-lg px-6 py-4 space-y-4`}>
          <a href="#about" onClick={toggleMenu} className="block hover:text-indigo-600">Sobre nosotros</a>
          <a href="#productos" onClick={toggleMenu} className="block hover:text-indigo-600">Productos</a>
          <a href="#reseñas" onClick={toggleMenu} className="block hover:text-indigo-600">Reseñas</a>
          <a href="#faq" onClick={toggleMenu} className="block hover:text-indigo-600">FAQ</a>
          <a href="#contacto" onClick={toggleMenu} className="block hover:text-indigo-600">Contacto</a>
        </div>
      )}
    </nav>
  )
}
