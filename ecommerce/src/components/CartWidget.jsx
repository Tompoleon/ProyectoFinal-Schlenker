import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function CartWidget () {
    const { totalUnits } = useContext(CartContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <div className="cart-widget" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-count">{totalUnits}</span>
        </div>
    );
};

export default CartWidget;