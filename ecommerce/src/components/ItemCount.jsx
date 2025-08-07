import React, { useState } from 'react';

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;