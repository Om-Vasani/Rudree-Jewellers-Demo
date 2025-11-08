import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    title: 'Gold Ring',
    desc: '22K Gold • Handcrafted Design',
    price: '₹45,000',
    img: '/image/ring.jpg',
  },
  {
    id: 2,
    title: 'Diamond Pendant',
    desc: '18K Gold • Certified Diamond',
    price: '₹85,000',
    img: '/image/pendant.jpg',
  },
  {
    id: 3,
    title: 'Gold Bracelet',
    desc: '22K Gold • Elegant Finish',
    price: '₹65,000',
    img: '/image/bracelet.jpg',
  },
]

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  )
}
