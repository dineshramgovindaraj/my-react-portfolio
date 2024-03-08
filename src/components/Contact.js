import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
const Contact = () => {
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


  return (
    <>
      <h1
        id="contact"
        className="contact-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        Contact
      </h1>
      <div className="form-content">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="from_name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="abc@gmail.com"
              name="from_email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
    </>
  );
};

export default Contact;
