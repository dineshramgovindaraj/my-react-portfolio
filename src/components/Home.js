import React from "react";
import "../styles/Home.css";
import Avathar from "../images/avathar-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-flex row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="avathar-img" src={Avathar} alt="avathar" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="home-head">
              <TypeAnimation
                sequence={[
                  `Hi 👋,\n My name is \n Dinesh Ram \n I build things for web`,
                  1000,
                  "",
                ]}
                speed={40}
                style={{
                  whiteSpace: "pre-line",
                }}
                repeat={Infinity}
              />
            </h1>
            <div>
              <button className="btn btn-secondary cv-btn">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
