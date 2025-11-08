    import ProductCard from './ProductCard'

const sample = [
  { id:1, title:'Solitaire Gold Ring', price:'₹85,000', img:'/images/ring.jpg' },
  { id:2, title:'Diamond Pendant', price:'₹120,000', img:'/images/pendant.jpg' },
  { id:3, title:'Classic Bracelet', price:'₹95,000', img:'/images/bracelet.jpg' },
  { id:4, title:'Stud Earrings', price:'₹22,000', img:'/images/ring.jpg' },
  { id:5, title:'Kundan Necklace', price:'₹150,000', img:'/images/pendant.jpg' },
  { id:6, title:'Gold Bangle', price:'₹45,000', img:'/images/bracelet.jpg' }
]

export default function ProductGrid(){
  return (
    <div className="product-grid wide">
      {sample.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  )
}
