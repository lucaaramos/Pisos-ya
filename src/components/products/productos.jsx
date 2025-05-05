import { useState } from 'react'

const products = [
  {
    title: "Piso Madera ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: ["src/assets/pisomadera.jpg", "src/assets/varios.png"],
  },
  {
    title: "Departamento en Belgrano",
    description: "3 ambientes con cocina amplia y luz natural.",
    images: ["src/assets/alamo.png", "src/assets/varios.png"],
  },
  {
    title: "Monoambiente en Recoleta",
    description: "Ideal para estudiantes o inversión.",
    images: ["src/assets/blanco.png", "src/assets/varios.png"],
  },
  {
    title: "Piso amplio en Caballito",
    description: "Con patio interno y cochera.",
    images: ["src/assets/claro.png", "src/assets/varios.png"],
  },
  {
    title: "PH con terraza en Almagro",
    description: "Estilo clásico con detalles modernos.",
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
      <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="relative group">
          <img src={images[current]} alt={title} className="w-full h-64 object-contain bg-white" />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition"
          >
            ▶
          </button>
        </div>
  
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
      </div>
    )
  }

export default function Products() {
    return (
      <section id="productos" className="bg-gray-50">
        <div
          className="relative h-[150vh] bg-fixed bg-center bg-cover flex items-center justify-center" // Aumenta la altura aquí
          style={{ backgroundImage: "url('/src/assets/pisomadera.jpg')" }} // Asegúrate de que la ruta de la imagen sea correcta
        >
          <div className="relative z-10 text-center px-4">
            <div className="text-center mb-10 ">
              <h2 className="text-2xl font-bold text-white">Nuestros pisos destacados</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  