import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext.jsx';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

function ItemDetail({ product }) {
  const { addToCart, cart } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (product.stock === 0) {
    return (
      <div className="item-detail">
        <img src={product.imagen} alt="Remera" style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem' }}/>
        <h2>{product.nombre}</h2>
        <p>Categoría: {product.category}</p>
        <p>Descripción: {product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        <h3 style={{ color: 'red', marginTop: '1rem' }}>Producto sin stock</h3>
      </div>
    );
  }

  const handleAdd = (quantity) => {
    const cartItem = cart.find(item => item.id === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    if (quantity + currentQuantity > product.stock) {
      setError('No hay suficiente stock disponible');
      return;
    }
    addToCart(product, quantity);
    setAdded(true);
    setError('');
  };

  return (
    <div className="item-detail">
      <img src={product.imagen} alt="Remera" style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem' }}/>
      <h2>{product.nombre}</h2>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <div>
          <button onClick={() => navigate('/cart')}>Ir al carrito</button>
          <button onClick={() => navigate('/')}>Seguir comprando</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;