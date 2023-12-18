import "../styles/Navbar.css";
import React, { useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import Home from "../components/Home";
// import Techstack from "../components/Techstack";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Project from "../components/Project";
// import Footer from "./components/FooterDown";
const Navbar = () => {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const techStackRef = useRef(null);
  // const projectRef = useRef(null);
  // const contactRef = useRef(null);
  // const scrollTo = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <>
      {/* <BrowserRouter> */}
      <section id="navbar">
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
                  <a className="nav-link nav-text" href="#home">
                    Home
                  </a>
                  {/* <Link className="nav-link nav-text" to="/#home">
                      Home
                    </Link> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#about">
                    About
                  </a>
                  {/* <Link className="nav-link nav-text" to="/#about">
                      About
                    </Link> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#tech-stack">
                    Tech Stack
                  </a>
                  {/* <Link className="nav-link nav-text" to="/#tech-stack">
                      Tech Stack
                    </Link> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#project">
                    Project
                  </a>
                  {/* <Link className="nav-link nav-text" to="/#project">
                      Project
                    </Link> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#contact">
                    Contact
                  </a>
                  {/* <Link className="nav-link nav-text" to="/contact">
                    Contact
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Navbar;
