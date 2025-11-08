    export default function ProductCard({ title, price, img }) {
  return (
    <div className="product-card card-shadow">
      {img ? <img src={img} alt={title} /> : <div className="placeholder">Image</div>}
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <button className="btn-outline">Enquire</button>
      </div>
    </div>
  )
}
