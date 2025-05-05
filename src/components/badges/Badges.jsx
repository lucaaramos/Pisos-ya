export default function Badges() {
  const data = [
    { label: 'Satisfacción garantizada', emoji: '💯' },
    { label: 'Asesoramiento experto', emoji: '🧑‍💼' },
    { label: 'Gestión 100% online', emoji: '🌐' },
    { label: '+500 propiedades', emoji: '🏡' },
  ];

  return (
    <section
      className="relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/img_blog_4.jpg')" }}
    >
      {/* Overlay para oscurecer la imagen y mejorar contraste */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Contenido por encima de la imagen */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold text-black mb-2">¿Por qué elegirnos?</h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
          Te acompañamos en cada paso para encontrar el piso ideal de forma rápida y segura.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 w-64 hover:scale-105 transform transition"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <p className="text-black font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
