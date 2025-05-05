
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300 ease-in-out 
      ${scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md text-black' 
        : 'bg-black/40 shadow-lg text-white'
      }`}>
      
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between relative">
        <div className={`text-2xl font-semibold tracking-wide ${scrolled ? 'text-indigo-600' : 'text-white'}`}>
        <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" /> 
        </div>

        {/* Enlaces centrados */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className={`flex space-x-20 text-sm transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <li><a href="#about" className="hover:text-indigo-600 transition">Sobre nosotros</a></li>
            <li><a href="#productos" className="hover:text-indigo-600 transition">Productos</a></li>
            <li><a href="#reseñas" className="hover:text-indigo-600 transition">Reseñas</a></li>
            <li><a href="#faq" className="hover:text-indigo-600 transition">FAQ</a></li>
            <li><a href="#contacto" className="hover:text-indigo-600 transition">Contacto</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
