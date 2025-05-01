import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-indigo-600 tracking-wide">Pisos Ya</div>
        <ul className="flex space-x-6 text-gray-700 text-sm">
          <li><a href="#about" className="hover:text-indigo-600 transition">Sobre nosotros</a></li>
          <li><a href="#contacto" className="hover:text-indigo-600 transition">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
