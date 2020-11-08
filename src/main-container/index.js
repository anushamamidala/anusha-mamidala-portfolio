import mainImage from "../assets/main-logo.svg";
import "./styles.scss";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

function MainContainer() {
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
    }
    window.open(linkURL, "_blank");
  };
  const emailMe = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=anushamamidala817@gmail.com",
      "_blank"
    );
  };
  return (
    <div className="main-container">
      <div className="main-container-social-media">
        <FiLinkedin
          className="social-media-margins"
          onClick={() => redirectURL("linkedin")}
        ></FiLinkedin>
        <FiGithub
          className="social-media-margins"
          onClick={() => redirectURL("github")}
        ></FiGithub>
        <FaStackOverflow
          className="social-media-margins"
          onClick={() => redirectURL("stackoverflow")}
        ></FaStackOverflow>
      </div>
      <div className="main-container-sec">
        <div className="main-container-desc">
          <div className="main-container-desc-section">
            <span className="main-contianer-desc-heading">
              Anusha
              <br />
              Mamidala
            </span>
            <span>FULL STACK DEVELOPER</span>
          </div>

          <span className="main-container-desc-tagline">
            If you are a freelance developer and if you love dogs just like me!
            Let's shake hands!!
          </span>
          <button className="main-container-chat-button" onClick={emailMe}>
            LET'S CHAT!
          </button>
        </div>
        <img src={mainImage} height="700" width="700" />
      </div>
    </div>
  );
}

export default MainContainer;
