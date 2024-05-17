import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


  const Cart = ({ cartItems, setCartItems }) => {
    // Update localStorage whenever cart items change
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
  
  const handleIncrease = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title} // Pass the title prop
            price={item.price}
            quantity={item.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div className="total-price">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
     <Link className="back-to-category-button" to="/programming">Back to Category</Link>
      
      <Link className="proceed-to-checkout-button" to="/checkout">Proceed to Checkout</Link>
      

      
      <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

const CartItem = ({ id, title, price, quantity, onIncrease, onDecrease, onRemove }) => {
  const handleIncrease = () => {
    onIncrease(id);
  };

  const handleDecrease = () => {
    onDecrease(id);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${(price * quantity).toFixed(2)}</p>
      </div>
      <div className="item-actions">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
