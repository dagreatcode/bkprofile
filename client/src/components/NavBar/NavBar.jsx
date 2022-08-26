import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mynav">
        <div className="container">
          <Link id="gonav" to="/" className="navbar-brand">
            {/* <!-- Logo Image --> */}
            <img src="./favicon.ico" alt="" width="30" height="24" />
            {/* <!-- Logo Text --> */}
            <span class="text-uppercase font-weight-bold"> BKProfile</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink id="gonav" to="/Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink id="gonav" to="/About" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink id="gonav" to="/Profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
