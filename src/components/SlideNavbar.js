// SlideNavbar.js
import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SlideNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Button
        variant="outline-light"
        className="toggle-button"
        onClick={handleToggle}
      >
        Toggle
      </Button>
      <Navbar className={`slide-navbar${showNavbar ? " active" : ""}`}>
        <Nav className="mr-auto">
          {/* Add your navbar links here */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default SlideNavbar;
