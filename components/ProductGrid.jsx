import Image from 'next/image'

const products = [
  { id: 1, title: "Solitaire Diamond Ring", price: "₹85,000", img: "/images/ring.webp" },
  { id: 2, title: "Gold Pendant", price: "₹45,000", img: "/images/pendant.webp" },
  { id: 3, title: "Gold Bracelet", price: "₹55,000", img: "/images/bracelet.webp" },
  { id: 4, title: "Bridal Necklace", price: "₹1,20,000", img: "/images/necklace.webp" },
  { id: 5, title: "Designer Bangles", price: "₹95,000", img: "/images/bangles.webp" },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-black">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-black border border-yellow-700 p-4 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-transform duration-500 hover:scale-105"
        >
          <div className="relative w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={product.img}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="mt-3 text-yellow-400 font-semibold">{product.title}</h3>
          <p className="text-white font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  )
}
