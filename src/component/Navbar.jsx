import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={{ pathname: "/", state: true }} className="navbar-brand">
          Fake Netflix
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/movie" className="nav-link">
                Movie
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/tv" className="nav-link">
                TV
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/people" className="nav-link">
                People
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
