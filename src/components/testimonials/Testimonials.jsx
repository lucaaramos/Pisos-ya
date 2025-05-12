export default function Testimonials() {
  const testimonials = [
    { name: 'Pri mi amor <3', text: 'Encontré el lugar perfecto en solo 3 días. Súper recomendado.' },
    { name: 'Lucía', text: 'El equipo me ayudó en todo. Muy profesional.' },
    { name: 'Santiago', text: 'El proceso fue rápido, seguro y digital.' },
    { name: 'Pri mi amor <3', text: 'Encontré el lugar perfecto en solo 3 días. Súper recomendado.' },
    { name: 'Lucía', text: 'El equipo me ayudó en todo. Muy profesional.' },
    { name: 'Santiago', text: 'El proceso fue rápido, seguro y digital.' },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{ backgroundImage: "url('/src/assets/fondo.jpg')" }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md w-full max-w-xs text-gray-700 transition-transform hover:scale-105"
            >
              <p className="italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-brown-600">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}