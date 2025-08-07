import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({}) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productosRef = collection(db, 'productos');
    let q = productosRef;

    if (categoryId) {
      q = query(productosRef, where('category', '==', categoryId));
    }

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(items);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;

  return (
    <div className='ItemListContainer'>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
