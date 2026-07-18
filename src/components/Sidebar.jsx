import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-menu">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
