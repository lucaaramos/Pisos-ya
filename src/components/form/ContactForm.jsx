import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Agenda una reunión</h2>
          <form className="bg-yellow-50 p-6 rounded-xl shadow-lg space-y-5">
            <input type="text" placeholder="Nombre" className="w-full p-3 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="tel" placeholder="Teléfono" className="w-full p-3 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <textarea placeholder="Mensaje" rows="4" className="w-full p-3 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
            <button className="w-full bg-amber-700 text-white py-3 rounded-md font-medium hover:bg-amber-800 transition">Enviar</button>
          </form>
        </div>

        {/* Redes sociales */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-yellow-900 mb-6">Contactanos por redes</h3>
          <div className="flex justify-center gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 text-5xl transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 text-5xl transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
