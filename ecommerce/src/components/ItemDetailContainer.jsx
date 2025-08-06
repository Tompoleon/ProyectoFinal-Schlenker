import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, 'productos', productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (err) {
        console.error(err);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <h2>Cargando detalle...</h2>;
  if (!producto) return <h2>Producto no encontrado</h2>;

  return <ItemDetail product={producto} />;
}

export default ItemDetailContainer;
