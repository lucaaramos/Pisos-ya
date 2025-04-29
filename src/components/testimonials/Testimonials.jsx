export default function Testimonials() {
    const reviews = [
      { name: "Martina", text: "Me ayudaron a encontrar el depto perfecto en solo 3 días. ¡Gracias!" },
      { name: "Santiago", text: "Muy profesional el equipo, resolvieron todas mis dudas." },
      { name: "Lucía", text: "El proceso fue simple, rápido y sin estrés." },
    ]
  
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow w-72">
              <p className="italic">“{r.text}”</p>
              <p className="mt-4 font-semibold text-indigo-600">- {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  