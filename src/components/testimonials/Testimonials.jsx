export default function Testimonials() {
  const testimonials = [
    { name: 'Pri mi amor <3', text: 'Encontré el lugar perfecto en solo 3 días. Súper recomendado.' },
    { name: 'Lucía', text: 'El equipo me ayudó en todo. Muy profesional.' },
    { name: 'Santiago', text: 'El proceso fue rápido, seguro y digital.' },
  ]

  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-10">Lo que dicen nuestros clientes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md w-72 text-gray-700">
            <p className="italic mb-4">“{t.text}”</p>
            <p className="font-semibold text-indigo-600">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
