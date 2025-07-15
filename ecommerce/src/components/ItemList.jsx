import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="product-grid">
      {productos.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
