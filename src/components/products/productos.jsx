import { useState } from 'react'

const products = [
  {
    title: "Piso Madera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["src/assets/pisomadera.jpg", "src/assets/varios.png"],
  },
  {
    title: "Piso Madera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["src/assets/alamo.png", "src/assets/varios.png"],
  },
  {
    title: "Piso Madera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["src/assets/blanco.png", "src/assets/varios.png"],
  },
  {
    title: "Piso Madera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",    
    images: ["src/assets/claro.png", "src/assets/varios.png"],
  },
  {
    title: "Piso Madera",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["src/assets/piso-madera.png", "src/assets/varios.png"],
  },
]

function ProductCard({ title, description, images }) {
  const [current, setCurrent] = useState(0)

  const prevImage = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrent((current + 1) % images.length)
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <div className="relative group">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-60 sm:h-64 md:h-72 lg:h-64 object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition"
        >
          ▶
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-neutral-700">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="bg-gray-50">
      <div
        className="relative min-h-[100vh] bg-fixed bg-center bg-cover flex flex-col items-center justify-center py-16 px-4"
        style={{ backgroundImage: "url('/src/assets/pisomadera.jpg')" }}
      >
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Nuestros pisos destacados</h2>
        </div>
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
