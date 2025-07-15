import React from 'react';

function CartWidget () {
    return (
        <div className="cart-widget">
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;