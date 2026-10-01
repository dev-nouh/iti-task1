function ProductCard({ product, addToCart}) {
  const { image, category, name, price } = product;
  return (
    <div className="card border-0 bg-transparent h-100">

      <div className="position-relative mb-3">
        <img src={image} alt={name} className="w-100 rounded-3 " />
        
        <button 
        onClick={() => addToCart(product)}
          className="btn btn-light border border-secondary-subtle rounded-pill position-absolute start-50 translate-middle-x fw-bold shadow-sm d-flex align-items-center gap-2 px-4 py-2"
          style={{ bottom: '-20px', color: '#260f08', whiteSpace: 'nowrap' }}
        >
          <i className="fa-shopping-cart bg-black"></i> Add to Cart
        </button>
      </div>

      <div className="card-body p-0 mt-3">
        <p className="text-secondary mb-1" style={{ fontSize: '0.9rem' }}>{category}</p>
        <h5 className="text-dark fw-bold mb-1 fs-5">{name}</h5>
        <p className="fw-bold mb-0 fs-5" style={{ color: '#c73a0f' }}>${price.toFixed(2)}</p> 
      </div>

    </div>
  )
}

export default ProductCard;