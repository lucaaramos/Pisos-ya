export default function ContactForm() {
    return (
      <section id="contacto" className="py-16 bg-indigo-50">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Agendá una reunión</h2>
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input type="text" placeholder="Nombre" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Correo electrónico" className="w-full border p-3 rounded" />
            <input type="tel" placeholder="Teléfono" className="w-full border p-3 rounded" />
            <textarea placeholder="Mensaje" className="w-full border p-3 rounded" rows="4"></textarea>
            <button className="bg-indigo-600 text-white w-full py-3 rounded hover:bg-indigo-700 transition">Enviar</button>
          </form>
        </div>
      </section>
    )
  }
  