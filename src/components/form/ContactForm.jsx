export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Agenda una reunión</h2>
        <form className="bg-blue-50 p-6 rounded-xl shadow-lg space-y-5">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="tel" placeholder="Teléfono" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea placeholder="Mensaje" rows="4" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition">Enviar</button>
        </form>
      </div>
    </section>
  )
}
