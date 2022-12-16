import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                GROUP 5
            </NavLink>
            
            <div>
                <ul className="navbar-nav pt-2">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink as={Link} to="/About.jsx" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink as={Link} to="/ContactUs.jsx" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;