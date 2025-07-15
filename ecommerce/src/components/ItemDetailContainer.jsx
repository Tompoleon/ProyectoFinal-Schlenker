import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://66d332ac184dce1713cf9442.mockapi.io/productos/${productId}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <h2>Cargando detalle...</h2>;

  if (!producto) return <h2>Producto no encontrado</h2>;

  return <ItemDetail product={producto} />;
}

export default ItemDetailContainer;
