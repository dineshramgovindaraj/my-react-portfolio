import React from "react";
import Linking from "../images/linking.png";
import GitLogo from "../images/github-logo.png";
import { Card } from "react-bootstrap";
import "../styles/Project.css";
import PigGame from "../images/pig-game.png";
import FlappyBird from "../images/flappy-bird.png";
import ColorFlipper from "../images/colour-flipper.png";
import Counter from "../images/counter.png";
import FormValidation from "../images/form-validation.png";
import Webpage from "../images/webpage.png";
const Project = () => {
  return (
    <>
      <h1 className="project-head" data-aos="zoom-in" data-aos-duration="1100">
        Projects
      </h1>
      <p className="project-para" data-aos="zoom-in" data-aos-duration="1100">
        {" "}
        Things I’ve built so far{" "}
      </p>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img variant="top" className="project-img" src={PigGame} />
              <Card.Body>
                <Card.Title className="card-title">Pig Game</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://pig-game-20910.netlify.app/"
                    target="_blank"
                    className="logo-text"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img
                variant="top"
                className="project-img"
                src={FlappyBird}
              />
              <Card.Body>
                <Card.Title className="card-title">Flappy Bird</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://flappy-bird-0001.netlify.app/"
                    className="logo-text"
                    target="_blank"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img
                variant="top"
                className="project-img"
                src={FormValidation}
              />
              <Card.Body>
                <Card.Title className="card-title">Form Validation</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://dineshram-formvalidation-js.netlify.app/"
                    className="logo-text"
                    target="_blank"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img variant="top" className="project-img" src={Counter} />
              <Card.Body>
                <Card.Title className="card-title">Counter</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://counter-js-0001.netlify.app/"
                    className="logo-text"
                    target="_blank"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img
                variant="top"
                className="project-img"
                src={ColorFlipper}
              />
              <Card.Body>
                <Card.Title className="card-title">Colour Flipper</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://colour-flipper-js.netlify.app/"
                    className="logo-text"
                    target="_blank"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card className="body-card">
              <Card.Img variant="top" className="project-img" src={Webpage} />
              <Card.Body>
                <Card.Title className="card-title">Web Page</Card.Title>
                <Card.Text className="card-text-content">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text className="text">
                  <b>Tech Stack:</b>
                  Html,Css,Js,React,Bootstrap
                </Card.Text>
                <div className="card-flex">
                  <Card.Link
                    href="https://learnify-0001.netlify.app/"
                    className="logo-text"
                    target="_blank"
                  >
                    <img src={Linking} /> Live Link
                  </Card.Link>
                  <Card.Link href="#" target="_blank" className="logo-text">
                    <img src={GitLogo} /> <span>&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
