import { useState } from 'react';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart'; 
import { productsData } from './Data';

export default function ProductsGrid() {

const [cartItem , setcartItem] = useState([]);

function addToCart(product) {

    const existingItem = cartItem.find((item) => item.id === product.id);

  if(existingItem){
    setcartItem(cartItem.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
  }else {
      setcartItem([...cartItem, { ...product, quantity: 1 }]);
    }


}

  return (
<div className="row g-4"> 
  <div className="col-lg-8">
    <div className="row g-4">
      {productsData.map((product) => (
                <div className="col-md-4" key={product.id}>
          <ProductCard 
              product={product} 
              addToCart={addToCart}
          />
        </div>
        
      ))}
    </div>
    
  </div>

  <div className="col-lg-4">
   <ShoppingCart cartItems={cartItem} />
  </div>

</div>


  )
}