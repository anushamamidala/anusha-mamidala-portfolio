import "./styles.scss";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  const githubURL = "https://github.com/anushamamidala";
  const linkedInURL = "https://www.linkedin.com/in/anusha-mamidala/";
  const stackOverFlowURL =
    "https://stackoverflow.com/users/7258113/anusha-mamidala";
  const redirectURL = (url) => {
    let linkURL = "";
    switch (url) {
      case "linkedin": {
        linkURL = linkedInURL;
        break;
      }

      case "github": {
        linkURL = githubURL;
        break;
      }

      case "stackoverflow": {
        linkURL = stackOverFlowURL;
        break;
      }
      default: {
        linkURL = stackOverFlowURL;
        break;
      }
    }
    window.open(linkURL, "_blank");
  };
  return (
    <div className="footer-container">
      <div className="footer-contact-info">
        <span className="footer-contact-info-heading">Stay Connected</span>
        <span className="footer-contact-info-place">Toronto, CA</span>
        <span className="footer-contact-info-email">
          anushamamidala817@gmail.com
        </span>
        <span className="footer-contact-info-phone">(+1) 647-570-5226</span>
      </div>
      <div className="footer-social-media-icons">
        <div
          className="footer-social-media-bg  blue-bg"
          onClick={() => redirectURL("linkedin")}
        >
          <FiLinkedin className="footer-social-media-icon linkedin-icon"></FiLinkedin>
        </div>
        <div
          className="footer-social-media-bg violet-bg"
          onClick={() => redirectURL("github")}
        >
          <FiGithub className="footer-social-media-icon github-icon"></FiGithub>
        </div>
        <div
          className="footer-social-media-bg pink-bg"
          onClick={() => redirectURL("stackoverflow")}
        >
          <FaStackOverflow className="footer-social-media-icon stackoverflow-icon"></FaStackOverflow>
        </div>
      </div>
      <div className="footer-bottom-nav">
        <span className="footer-name-logo">Anusha</span>
        <div className="footer-nav-bar">
          <span>ABOUT</span>
          <span>WORKS</span>
          <span>SERVICES</span>
          <span>CONTACT</span>
        </div>
        <div className="footer-rights">
          <span>2020 ALL RIGHTS RESERVED</span>
        </div>
      </div>
      <div className="footer-bottom-colors">
        <span className="footer-first-color"></span>
        <span className="footer-second-color"></span>
        <span className="footer-third-color"></span>
        <span className="footer-fourth-color"></span>
      </div>
    </div>
  );
}

export default Footer;
