export default function Hero() {
    return (
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-2xl animate-fade-in-down">
            <h1 className="text-5xl font-semibold mb-6 tracking-tight">Tu nuevo piso te espera</h1>
            <p className="mb-6 text-xl">Tranquilidad, claridad y rapidez en tu búsqueda pisos.</p> 
            <a href="#contacto" className="bg-black/90 text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
              Agendar una reunión
            </a>
          </div>
        </div>
      </section>
    )
  }
  