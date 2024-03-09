import React from "react";
import "../styles/Footer.css";
import Github from "../images/footer-git.png";
import Linkedin from "../images/linkedin-new.png";
import Instagram from "../images/instagram-new.png";
const FooterDown = () => {
  
  return (
    <>
      <section id="footer">
        <hr />
        <div className="footer-head">Contact</div>
        <p className="bg-common footer-alert">
          Click the icon below to check out my social media platforms! 🌐👀
        </p>
        <div className="footer-img-flex ">
          <div className="bg-common">
            <a
              href="https://www.linkedin.com/in/dinesh-ram-govindaraj/"
              className="bg-common"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Linkedin}
                className="footer-img"
                style={{ height: "34px" }}
                target="_blank"
                alt="linkedin"
              />
            </a>
          </div>

          <div className="bg-common">
            <a
              href="https://github.com/dineshramGovindaraj"
              className="bg-common"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} className="footer-img" alt="github" />
            </a>
          </div>

          <div className="bg-common">
            <a
              href="https://www.instagram.com/___dinesh_ram___?igshid=MTNiYzNiMzkwZA=="
              className="bg-common"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Instagram}
                className="footer-img"
                style={{ height: "34px" }}
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="footer-text-div">
          <p className="footer-text">
            Designed and developed by{" "}
            <span className="footer-span">Dinesh Ram</span>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterDown;
