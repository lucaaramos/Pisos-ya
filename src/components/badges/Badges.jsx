export default function Badges() {
  const data = [
    { label: 'Satisfacción garantizada', emoji: '💯' },
    { label: 'Asesoramiento experto', emoji: '🧑‍💼' },
    { label: 'Gestión 100% online', emoji: '🌐' },
    { label: '+500 propiedades', emoji: '🏡' },
  ]

  return (
    <section className="py-16 bg-blue-50 text-center">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 w-64 hover:scale-105 transform transition">
            <div className="text-4xl mb-3">{item.emoji}</div>
            <p className="text-indigo-700 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
