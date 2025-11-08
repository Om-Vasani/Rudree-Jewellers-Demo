import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    title: 'Gold Ring',
    desc: '22K Gold • Premium Finish',
    price: '₹55,000',
    img: '/images/ring.jpg'
  },
  {
    id: 2,
    title: 'Diamond Pendant',
    desc: '18K Gold • Certified Diamond',
    price: '₹1,20,000',
    img: '/images/pendant.jpg'
  },
  {
    id: 3,
    title: 'Gold Bracelet',
    desc: '22K • Handcrafted Design',
    price: '₹85,000',
    img: '/images/bracelet.jpg'
  }
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
