// import React from "react";
// import "../styles/Navbar.css";
// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = React.useState(false);

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container container">
//         <div className="logo">Portfolio</div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           {/* <Hamburger /> */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="52"
//             height="24"
//             viewBox="0 0 52 24"
//           >
//             <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
//               <rect
//                 id="Rectangle_3"
//                 data-name="Rectangle 3"
//                 width="42"
//                 height="4"
//                 rx="2"
//                 transform="translate(304 47)"
//                 fill="#574c4c"
//               ></rect>
//               <rect
//                 id="Rectangle_5"
//                 data-name="Rectangle 5"
//                 width="42"
//                 height="4"
//                 rx="2"
//                 transform="translate(304 67)"
//                 fill="#574c4c"
//               ></rect>
//               <rect
//                 id="Rectangle_4"
//                 data-name="Rectangle 4"
//                 width="52"
//                 height="4"
//                 rx="2"
//                 transform="translate(294 57)"
//                 fill="#574c4c"
//               ></rect>
//             </g>
//           </svg>
//         </div>
//         <div className={`nav-elements  ${showNavbar && "active"}`}>
//           <ul>
//             <li>
//               {/* <NavLink to="/">Home</NavLink> */}
//               <a>Home</a>
//             </li>
//             <li>
//               {/* <NavLink to="/about">About</NavLink> */}
//               <a>About</a>
//             </li>
//             <li>
//               {/* <NavLink to="/tech-stack">Tech Stack</NavLink> */}
//               <a>Tech Stack</a>
//             </li>
//             <li>
//               {/* <NavLink to="/project">Project</NavLink> */}
//               <a>Project</a>
//             </li>
//             <li>
//               {/* <NavLink to="/contact">Contact</NavLink> */}
//               <a>Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Dinesh Ram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse " id="navbarText">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
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
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
