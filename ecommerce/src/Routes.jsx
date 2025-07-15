import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/Error404';

const RoutesConfig = ({saludo}) => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer saludo ={saludo} />} />
      <Route path="/products" element={<ItemListContainer saludo ={saludo} />} />
      <Route path="/category/:categoryId" element={<ItemListContainer saludo ={saludo} />} />
      <Route path="/product/:productId" element={<ItemDetailContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
