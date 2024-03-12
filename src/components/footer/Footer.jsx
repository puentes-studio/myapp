import "./Footer.css";
import Linkedin from "../../assets/linkedin-app-white-icon.webp";
import Github from "../../assets/github-white-icon.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="social-icons">
          <a href="" target="_blank">
            <img className="linkedin-size" src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img className="github-size" src={Github} alt="GitHub" />
          </a>
        </div>
        <h4 className="footer-title">Vlad Beltran Puentes</h4>
        <p className="footer-description">
          FrontEnd Developer | UI & Graphic Designer
        </p>

        <p className="footer-description">+34 658 608 216 / +44 7515 482792</p>
        <p className="footer-description">Spain, Europe - United Kingdon</p>

        <ul className="footer-list">
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
