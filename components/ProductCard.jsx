import Image from 'next/image'

export default function ProductCard({ title, desc, price, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <Image src={img} alt={title} width={400} height={300} className="rounded-xl object-cover" />
      <h3 className="text-lg font-semibold mt-3 text-yellow-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
      <p className="text-yellow-700 font-bold mt-2">{price}</p>
    </div>
  )
}
