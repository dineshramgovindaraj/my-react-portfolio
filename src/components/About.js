import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <>
      <h1
        id="about"
        className="about-head"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        About
      </h1>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="flip-left"
            data-aos-duration="1200"
          >
            <p className="about-para">
              {" "}
              A frontend developer proficient in HTML, CSS, JavaScript,
              Bootstrap, React.js. Skilled in designing user- friendly web
              applications, collaborating with teams, and meeting deadlines.
              Strong UI development expertise with a focus on responsive design.
              Proficient in React.js for dynamic components. Dedicated to
              continuous learning and innovation in web development.
            </p>
          </div>
          <div
            className="col-lg-6"
            data-aos="flip-right"
            data-aos-duration="1200"
          >
            <table className="about-table">
              <tr>
                <td className="about-question">Name</td>
                <td className="about-answer">Dinesh Ram</td>
              </tr>
              <tr>
                <td className="about-question">Date of birth</td>
                <td className="about-answer">October 19, 2002</td>
              </tr>
              <tr>
                <td className="about-question">Degree</td>
                <td className="about-answer">B.Tech</td>
              </tr>
              <tr>
                <td className="about-question">Cource</td>
                <td className="about-answer">Information Technology</td>
              </tr>
              <tr>
                <td className="about-question">Email</td>
                <td className="about-answer">dineshramgovindaraj@gmail.com</td>
              </tr>
              <tr>
                <td className="about-question">Phone No</td>
                <td className="about-answer">+91 63821 83872</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
