import React from "react";
import Linking from "../images/linking.png";
import GitLogo from "../images/github-logo.png";
import { Card } from "react-bootstrap";
import "../styles/Project.css";
import PigGame from "../images/pig-game.png";
import FlappyBird from "../images/flappy-bird.png";
import ColorFlipper from "../images/colour-flipper.png";
import Counter from "../images/counter.png";
import TodoList from "../images/todo-list.png";
import Crud from "../images/crud.png";
import Netflix from "../images/netflix.png";
// import Quiz from "../images/quiz.png";
//
const Project = () => {
  const projectAlert = () => {
    alert("Document for this project is not added");
  };
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
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a
                    href="https://pig-game-00001.netlify.app"
                    className="doc-link"
                  >
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://pig-game-20910.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      className="card-common-bg"
                      alt="inkedin"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/pig-game"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      className="card-common-bg"
                      alt="github"
                    />{" "}
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

                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a onClick={projectAlert} href="error" className="doc-link">
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://flappy-bird-0001.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/flappy-bird"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
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
              <Card.Img variant="top" className="project-img" src={Crud} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Crud Operation
                </Card.Title>

                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js,Reactjs
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a href="https://crud-00001.netlify.app" className="doc-link">
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href=" https://dineshramgovindaraj.github.io/react-crud/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/react-crud"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
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
              <Card.Img variant="top" className="project-img" src={TodoList} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Todo List
                </Card.Title>

                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js,Reactjs
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a href="https://todo-00001.netlify.app" className="doc-link">
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://dineshramgovindaraj.github.io/react-todo-list/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/react-todo-list"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
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
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a
                    href="https://colour-flipper-0001.netlify.app"
                    className="doc-link"
                  >
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://colour-flipper-js.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/color-flipper"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
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

                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Html,Css,Js
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a onClick={projectAlert} href="error" className="doc-link">
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://counter-js-0001.netlify.app/"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/counter"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
                    <span className="card-common-bg">&nbsp;</span>
                    View Code
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-sm-12 body-margin">
            <Card
              className="body-card"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <Card.Img variant="top" className="project-img" src={Netflix} />
              <Card.Body className="card-common-bg">
                <Card.Title className="card-title card-common-bg">
                  Netflix Clone
                </Card.Title>

                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Tech Stack:</b>
                  Reactjs
                </Card.Text>
                <Card.Text className="text card-common-bg">
                  <b className="card-common-bg">Document : </b>
                  <a onClick={projectAlert} href="error" className="doc-link">
                    Click Here
                  </a>
                </Card.Text>
                <div className="card-flex card-common-bg">
                  <Card.Link
                    href="https://dineshramGovindaraj.github.io/netflix"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={Linking}
                      alt="linking"
                      className="card-common-bg"
                    />{" "}
                    Live Link
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/dineshramGovindaraj/netflix"
                    target="_blank"
                    className="logo-text card-common-bg"
                  >
                    <img
                      src={GitLogo}
                      alt="gitlogo"
                      className="card-common-bg"
                    />{" "}
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
