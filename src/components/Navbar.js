import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import "../styles/Navbar.css";
// import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwz66gl",
        "template_jexzh1c",
        form.current,
        "-Fxoc4QKMaMf6lCEX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submittedAlert = () => {
    alert("Thankyou for reaching out me");
  };

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <>
      <section id="navbar">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "black" }}
        >
          <a
            className="navbar-brand"
            href="https://dineshramgovindaraj.github.io/portfolio-react/"
            style={{ color: "white" }}
          >
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
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#tech-stack">
                    Tech Stack
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#workedproject">
                    Worked Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#project">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-text "
                    variant="primary"
                    onClick={handleShow}
                    href="#contact"
                  >
                    Contact
                  </a>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="body-model">
                      <div className=" form-content">
                        <Form
                          ref={form}
                          className="form-text"
                          onSubmit={sendEmail}
                        >
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your name"
                              name="from_name"
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="abc@gmail.com"
                              name="from_email"
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              placeholder="Message..."
                              rows={3}
                              name="message"
                              required
                            />
                          </Form.Group>
                          <div className="btn-flex">
                            <div>
                              <button
                                className="btn btn-secondary contact-btn"
                                onClick={submittedAlert}
                                value="Send"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
