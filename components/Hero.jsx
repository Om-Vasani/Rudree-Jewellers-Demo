import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-yellow-50 py-12 md:py-20">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4">
            Timeless Elegance in Every Piece
          </h1>
          <p className="text-gray-700 mb-6">
            Discover handcrafted gold and diamond jewellery that defines sophistication and grace.
          </p>
          <a href="/products" className="bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800">
            Explore Collection
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/image/pendant.jpg"
            alt="Jewellery Hero"
            width={400}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
