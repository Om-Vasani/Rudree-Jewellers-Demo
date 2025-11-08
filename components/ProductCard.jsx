export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition">
      <img src={product.img} alt={product.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.desc}</p>
        <p className="mt-2 text-yellow-600 font-bold">{product.price}</p>
      </div>
    </div>
  )
}
