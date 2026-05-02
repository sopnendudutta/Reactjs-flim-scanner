import { Link } from "react-router-dom";
import Favorites from "../pages/FavoritesPage";
// src/components/NavBar.jsx
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">

        <div className="navbar-brand">
            <Link to="/">Flim Scanner</Link>
        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar