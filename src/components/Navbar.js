import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "black" }}
        >
          <a className="navbar-brand" style={{ color: "white" }}>
            <b>Dinesh Ram</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "75%" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ backgroundColor: "white" }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#carousel">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#review">
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
