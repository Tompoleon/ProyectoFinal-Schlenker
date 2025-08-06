import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="product-card">
      <h3>{product.nombre}</h3>
      <p>Precio: {product.precio}</p>
      <p>Categoría: {product.category}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
