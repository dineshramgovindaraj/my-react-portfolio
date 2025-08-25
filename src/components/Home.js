import React from "react";
import "../styles/Home.css";
import Myimg from "../images/my-image.jpeg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  // const dwAlert = () => {
  //   alert("CV Not added");
  //   const link =
  //     "https://drive.google.com/file/d/1h9nS6tJlM5kbt-BMsWW4aU6IoPIHUJf0/view?usp=drivesdk";
  // };

  return (
    <>
      <div id="home" className="container">
        <div className="home-flex row">
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="col-lg-6 col-md-6 col-sm-12"
          >
            <img className="avathar-img" src={Myimg} alt="avathar" />
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
              {/* <Link to={"/page-not-found"}> */}
              <a href="https://drive.google.com/file/d/1M9ew_-Vj4RRO7muAHA_yhncnZyajCW4z/view?usp=drive_link">
                <button className="btn btn-secondary cv-btn">
                  Download CV
                </button>
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
