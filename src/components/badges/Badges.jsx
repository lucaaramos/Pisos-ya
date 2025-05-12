export default function Badges() {
  const data = [
    { label: 'Satisfacción garantizada', emoji: '💯' },
    { label: 'Asesoramiento experto', emoji: '🧑‍💼' },
    { label: 'Gestión 100% online', emoji: '🌐' },
    { label: '+500 propiedades', emoji: '🏡' },
  ];

  return (
    <section
      className="relative min-h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/src/assets/img_blog_4.jpg')" }}
    >
      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center w-full max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">¿Por qué elegirnos?</h2>
        <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-2xl mx-auto px-2">
          Te acompañamos en cada paso para encontrar el piso ideal de forma rápida y segura.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 w-64 max-w-full hover:scale-105 transform transition"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <p className="text-black font-medium text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
