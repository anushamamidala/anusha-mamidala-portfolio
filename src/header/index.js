import "./styles.scss";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  const emailMe = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=anushamamidala817@gmail.com",
      "_blank"
    );
  };
  return (
    <nav className="header-nav">
      <div className="header-basic-info">
        <span className="header-name-logo">Anusha</span>
        <span className="header-job-title">FULL STACK DEVELOPER</span>
        <span className="header-contact-info" onClick={emailMe}>
          Call Me (+1) 647-570-5226{" "}
          <span className="header-job-title"> / </span>{" "}
          anushamamidala817@gmail.com
        </span>
      </div>
      <div className="header-basic-ham-menu">
        <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
      </div>
    </nav>
  );
}

export default Header;
