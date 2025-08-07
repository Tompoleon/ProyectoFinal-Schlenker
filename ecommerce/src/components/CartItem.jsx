import React from 'react';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <h4>{item.nombre}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.precio}</p>
      <p>Subtotal: ${item.precio * item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;