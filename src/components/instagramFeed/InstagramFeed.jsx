export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-2xl font-bold text-indigo-700 mb-8">Seguinos en Instagram</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {[1,2,3,4].map((_, i) => (
          <div key={i} className="w-40 h-40 bg-gray-200 rounded-xl animate-pulse"></div>
        ))}
      </div>
    </section>
  )
}
