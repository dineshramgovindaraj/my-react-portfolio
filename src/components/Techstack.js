import React from "react";
import "../styles/Techstack.css";
import Html from "../images/vscode-icons_file-type-html.svg";
import Css from "../images/vscode-icons_file-type-css.svg";
import Js from "../images/vscode-icons_file-type-js-official.svg";
import Reactjs from "../images/logos_react.svg";
import Bootstrap from "../images/logos_bootstrap.svg";
import Github from "../images/akar-icons_github-fill.svg";
import Git from "../images/logos_git-icon.svg";
import Vscode from "../images/vscode-icons_file-type-vscode.svg";
const Techstack = () => {
  return (
    <>
      <h1
        id="tech-stack"
        className="tech-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        My Tech Stack
      </h1>
      <p className="tech-para" data-aos="zoom-in" data-aos-duration="1100">
        {" "}
        Technologies I've been working with recently
      </p>
      <div className="container">
        <div className="flex-parent ">
          <div className="flex-child">
            <img
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              src={Html}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              src={Css}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              src={Bootstrap}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              src={Js}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              src={Reactjs}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              src={Vscode}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              src={Git}
              className="tech-img"
              alt="image"
            />
          </div>
          <div className="flex-child">
            <img
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              src={Github}
              className="tech-img"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
