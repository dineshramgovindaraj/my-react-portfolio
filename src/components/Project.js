import React from "react";
import Dummy from "../images/dummy.png";
import Linking from "../images/linking.png";
import GitLogo from "../images/github-logo.png";
import { Card } from "react-bootstrap";
import "../styles/Project.css";
const Project = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <Card className="h-100" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Dummy} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text">
                <b>Tech Stack:</b>
                Html,Css,Js,React,Bootstrap
              </Card.Text>
              <div className="card-flex">
                <Card.Link href="#" className="logo-text">
                  <img src={Linking} /> Live Link
                </Card.Link>
                <Card.Link href="#" className="logo-text">
                  <img src={GitLogo} />
                  View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3">
          <Card className="h-100" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Dummy} />
            <Card.Body>
              <Card.Title className="card-title">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Text className="text">
                <b>Tech Stack:</b>
                Html,Css,Js,React,Bootstrap
              </Card.Text>
              <div className="card-flex">
                <Card.Link href="#" className="logo-text">
                  <img src={Linking} /> Live Link
                </Card.Link>
                <Card.Link href="#" className="logo-text">
                  <img src={GitLogo} />
                  View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Project;
