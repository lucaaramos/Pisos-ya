export default function InstagramFeed() {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Seguinos en Instagram</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-40 h-40 bg-gray-300 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </section>
    )
  }
  