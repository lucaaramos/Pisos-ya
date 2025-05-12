const images = [
  '/src/assets/fondo2.jpg',
  '/src/assets/fondo2.jpg',
  '/src/assets/fondo2.jpg',
  '/src/assets/fondo2.jpg',

];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">
        Seguinos en <span className="text-pink-500">@PisosYa</span>
      </h2>

      <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-md mx-auto">
        Compartimos tips, novedades y propiedades exclusivas cada semana. ¡No te lo pierdas!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <a
            key={i}
            href="https://www.instagram.com/_pisosya/"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-xl shadow hover:scale-105 transition"
          >
            <img
              src={img}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-40 object-cover"
            />
          </a>
        ))}
      </div>

      <a
        href="https://www.instagram.com/_pisosya/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Ver más en Instagram
      </a>
    </section>
  );
}
