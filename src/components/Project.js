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
      <h1
        id="project"
        className="project-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        Projects
      </h1>
      <p className="project-para" data-aos="zoom-in" data-aos-duration="1100">
        {" "}
        Things I’ve built so far{" "}
      </p>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img variant="top" className="project-img" src={PigGame} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Pig Game
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  Pig is a dice game where players take turns rolling,
                  accumulating points. Roll a 1, lose turn's points. Risk or
                  pass to win. Exciting, unpredictable family fun!
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://pig-game-20910.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img
                variant="top"
                className="project-img"
                src={FlappyBird}
              />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Flappy Bird
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  Flappy Bird, a simple yet addictive computer game, challenges
                  players to navigate a bird through pipes by tapping the
                  screen. Infamous for its difficulty and sudden success.
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://flappy-bird-0001.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img
                variant="top"
                className="project-img"
                src={FormValidation}
              />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Form Validation
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  It ensures accurate user input. Validate fields for format,
                  completeness, and constraints. JS and HTML offer tools for
                  validation, enhancing user experience and data integrity.
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://dineshram-formvalidation-js.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img variant="top" className="project-img" src={Counter} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Counter
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  Counting creates order, measures progress, and fosters
                  understanding. In life's complex symphony, a reliable counter
                  orchestrates precision, unlocking clarity within chaos.
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://counter-js-0001.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img
                variant="top"
                className="project-img"
                src={ColorFlipper}
              />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Color Flipper
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  A vibrant tool that randomly generates colors, providing
                  instant inspiration for design projects. Effortlessly explore
                  endless color combinations with a simple click.
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://colour-flipper-js.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img variant="top" className="project-img" src={Webpage} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Web Page
                </Card.Title>
                <Card.Text className="card-text-content card-common-bg">
                  Elevate your skills with our dynamic e-learning platform.
                  Access diverse courses anytime. Engaging content, expert
                  instructors—empower your learning journey today!
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js,Bootstrap
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://learnify-0001.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={Linking} className="card-common-bg" /> Live Link
                  </Card.Link>
                  <Card.Link
                    href={"/page-not-found"}
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img src={GitLogo} className="card-common-bg" />{" "}
                    <span className="card-common-bg">&nbsp;</span>
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
