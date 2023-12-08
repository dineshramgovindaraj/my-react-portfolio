import React from "react";
import Avathar from "../images/avathar-removebg-preview.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-flex row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="avathar-img" src={Avathar} alt="my image" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="home-head">
              Hi 👋,
              <br /> My name is <br />{" "}
              <span className="home-span">Dinesh Ram</span> <br /> I build
              things for web
            </h1>
            <button className="btn btn-secondary cv-btn">Download CV</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
