import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="product-card">
      <h3>{product.nombre}</h3>
      <img src={product.imagen} alt="Remera" style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem' }}/>
      <p>Precio: ${product.precio}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
