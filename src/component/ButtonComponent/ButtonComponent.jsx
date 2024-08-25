import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./ButtonComponent.css";

const ButtonComponent = ({ text, active }) => {
  return (
    <div
      className={
        active
          ? "schedual-vist-btn-with-icon display-flex background-color-black"
          : "schedual-vist-btn-without-icon background-color-black"
      }
    >
      {active && (
        <a
          className="icon background-color-orange margin-negative schedual-vist-icon"
          href="#"
        >
          <FontAwesomeIcon icon={faCalendar} />
        </a>
      )}
      <p className="color-white margin-zero padding-8 font-size-14">{text}</p>
    </div>
  );
};

export default ButtonComponent;
