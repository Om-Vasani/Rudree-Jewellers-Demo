import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-96">
      <Image
        src="/images/hero-banner.jpg"
        alt="Hero Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Rudree Jewellers
        </h1>
      </div>
    </section>
  )
}
