function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <h2>{product.nombre}</h2>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
