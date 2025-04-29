export default function Badges() {
    const data = [
      { label: 'Garantía de satisfacción', emoji: '✅' },
      { label: 'Asesoramiento gratuito', emoji: '💬' },
      { label: 'Proceso 100% digital', emoji: '📱' },
      { label: 'Más de 500 propiedades', emoji: '🏠' },
    ]
  
    return (
      <section className="py-12 bg-white text-center">
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-lg w-60 shadow-md">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <p className="font-semibold text-indigo-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  