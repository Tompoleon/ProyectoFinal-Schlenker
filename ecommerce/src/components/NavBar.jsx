import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';  

function NavBar() {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Despertares</h1>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                
                <li 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link to="/products">Products</Link>
                    {isHovered && (
                        <ul className="dropdown">
                            <li><Link to="/category/remeras">Remeras</Link></li>
                            <li><Link to="/category/buzos">Buzos</Link></li>
                        </ul>
                    )}
                </li>
                
                <li><Link to="/about">About</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
