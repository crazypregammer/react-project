import logo from '../assets/react.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={logo} alt="Ecommerce logo" />
            <span className="navbar-name">Ecommerce</span>
        </nav>
    );
}

export default Navbar;
