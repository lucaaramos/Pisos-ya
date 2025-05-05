export default function Testimonials() {
  const testimonials = [
    { name: 'Pri mi amor <3', text: 'Encontré el lugar perfecto en solo 3 días. Súper recomendado.' },
    { name: 'Lucía', text: 'El equipo me ayudó en todo. Muy profesional.' },
    { name: 'Santiago', text: 'El proceso fue rápido, seguro y digital.' },
    { name: 'Pri mi amor <3', text: 'Encontré el lugar perfecto en solo 3 días. Súper recomendado.' },
    { name: 'Lucía', text: 'El equipo me ayudó en todo. Muy profesional.' },
    { name: 'Santiago', text: 'El proceso fue rápido, seguro y digital.' },
  ]

  return (
    <section
      className="relative h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/fondo.jpg')" }}
    >
      {/* Overlay translúcido para contraste */}
      <div className="absolute"></div>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold text-brown mb-12">Lo que dicen nuestros clientes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl w-72 text-gray-700">
              <p className="italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-brown-600">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
