import "./styles.scss";
import workInquiry from "../assets/work-inquiry.svg";

function WorkInquiry() {
  const emailMe = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=anushamamidala817@gmail.com",
      "_blank"
    );
  };
  return (
    <div className="work-inquiry-container">
      <img src={workInquiry} height="200" width="200" />
      <div className="work-inquiry-details-container">
        <div className="work-inquiry-details-text">
          <span className="work-inquiry-main-heading">Work Inquiry</span>
          <span className="work-inquiry-tagline">
            Let's work togeather and i'll help you by all my best
          </span>
        </div>
        <button onClick={emailMe}>LET'S CHAT!</button>
      </div>
    </div>
  );
}

export default WorkInquiry;
