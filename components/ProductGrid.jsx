import Image from 'next/image'

const products = [
  { id: 1, title: "Solitaire Diamond Ring", price: "₹85,000", img: "https://via.placeholder.com/300x300.png?text=Ring" },
  { id: 2, title: "Gold Pendant", price: "₹45,000", img: "https://via.placeholder.com/300x300.png?text=Pendant" },
  { id: 3, title: "Gold Bracelet", price: "₹55,000", img: "https://via.placeholder.com/300x300.png?text=Bracelet" },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <Image
            src={product.img}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover rounded"
          />
          <h3 className="mt-2 font-semibold">{product.title}</h3>
          <p className="text-yellow-700 font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  )
}
