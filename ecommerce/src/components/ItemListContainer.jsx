import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer({ saludo }) {
  
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://66d332ac184dce1713cf9442.mockapi.io/productos') 
      .then(res => res.json())
      .then(data => {
        const filtrados = categoryId
          ? data.filter(p => p.category === categoryId)
          : data;
        setProductos(filtrados);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;

  return (
    <div className='ItemListContainer'>
      <h2>{saludo}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
