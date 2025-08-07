import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext.jsx';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2>Carrito vacío</h2>;
  }

  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={() => navigate('/checkout')}>Finalizar compra</button>
    </div>
  );
}

export default Cart;