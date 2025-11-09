import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh]">
      <Image
        src="/images/hero-banner.webp"
        alt="Rudree Jewellers Hero Banner"
        fill
        className="object-cover brightness-[0.7]"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg">
            Rudree Jewellers
          </h1>
          <p className="mt-4 text-white text-xl">
            Black & Gold Luxury Collection
          </p>
        </div>
      </div>
    </section>
  )
}
