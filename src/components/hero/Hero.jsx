// src/components/hero/Hero.jsx
export default function Hero() {
    return (
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Encontrá el hogar de tus sueños
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Con Pisos Ya, hacelo realidad rápido, seguro y acompañado
            </p>
            <a
              href="#contacto"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
            >
              ¡Agendá tu reunión!
            </a>
          </div>
        </div>
      </section>
    );
  }
  