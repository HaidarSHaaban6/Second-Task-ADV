import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./TopBar.css";

const TopBar = ({ topBarInfo, socialMediaInfo }) => {
  return (
    <div className="above-nav display-flex justify-content-space-between container">
      <div className="display-flex">
        <div className="display-flex align-item-center margin-right-10">
          <FontAwesomeIcon
            className="color-orange margin-y-10"
            icon={faEnvelope}
          />
          <p className="margin-zero">
            <a
              className="color-light-gray text-decoration-none"
              href={topBarInfo.email}
            >
              {topBarInfo.email}
            </a>
          </p>
        </div>

        <span className="styling-span"></span>

        <div className="display-flex align-item-center margin-left-10">
          <FontAwesomeIcon className="color-orange margin-y-10" icon={faMap} />
          <p className="color-light-gray margin-zero">
            <a className="color-light-gray text-decoration-none" href="#">
              {topBarInfo.location}
            </a>
          </p>
        </div>
      </div>

      <ul className="display-flex align-item-center list-style-none justify-content-space-between margin-zero">
        <li>
          <a className="icon" href={socialMediaInfo.facebook}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a className="icon" href={socialMediaInfo.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a className="icon" href={socialMediaInfo.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a className="icon" href={socialMediaInfo.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
