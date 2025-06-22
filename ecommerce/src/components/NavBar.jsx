import CartWidget from './CartWidget';

function NavBar() {
    return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1>Ecommerce</h1>
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <CartWidget />
            </nav>
    );
}

export default NavBar;