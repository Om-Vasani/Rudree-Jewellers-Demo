import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-96">
      <Image
        src="https://via.placeholder.com/1200x400.png?text=Hero+Banner"
        alt="Hero Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Welcome to Rudree Jewellers
        </h1>
      </div>
    </section>
  )
}
