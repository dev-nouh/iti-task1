import emptyCartImg from './assets/illustration-empty-cart.svg'; 
import './ShoppingCart.css';

export default function ShoppingCart({ cartItems }) {
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const orderTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      
      <h4 className="cart-title">
        Your Cart ({totalQuantity})
      </h4>

      {cartItems.length === 0 ? (
        
        <div className="empty-cart-content">
          <img src={emptyCartImg} alt="Empty Cart" className="empty-cart-img" />
          <p className="empty-cart-text">Your added items will appear here</p>
        </div>

      ) : (

        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
              <div>
                <h6 className="mb-1 text-dark fw-bold" style={{ fontSize: '1rem' }}>{item.name}</h6>
                <div className="d-flex gap-3">
                  <span className="fw-bold" style={{ color: '#c73a0f' }}>{item.quantity}x</span>
                  <span className="text-secondary">@ ${item.price.toFixed(2)}</span>
                  <span className="fw-bold" style={{ color: '#87635a' }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              
              <button className="btn btn-outline-secondary rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '22px', height: '22px' }}>
                <i className="fa-solid fa-xmark" style={{ fontSize: '10px' }}></i>
              </button>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center my-4">
            <span className="text-secondary fw-semibold">Order Total</span>
            <h3 className="fw-bold m-0" style={{ color: '#260f08' }}>${orderTotal.toFixed(2)}</h3>
          </div>

          <div className="alert border-0 text-center mb-4" style={{ backgroundColor: '#fcf8f5', color: '#260f08' }}>
            <i className="fa-solid fa-tree text-success me-2"></i>
            This is a <span className="fw-bold">carbon-neutral</span> delivery
          </div>

          <button className="btn w-100 rounded-pill py-3 fw-bold text-white shadow-sm" style={{ backgroundColor: '#c73a0f' }}>
            Confirm Order
          </button>
        </div>

      )}

    </div>
  )
}