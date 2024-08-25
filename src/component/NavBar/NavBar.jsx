import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const NavBar = () => {
  const [navToggler, setNavToggler] = useState(false);

  const topBarInfo = {
    email: "info@company.com",
    location: "Sunny Isles Beach,Fl 33190",
  };

  const socialMediaInfo = {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  };

  return (
    <div className="giving-position">
      <TopBar topBarInfo={topBarInfo} socialMediaInfo={socialMediaInfo} />

      <div className="border"></div>

      <nav className="display-flex align-item-center justify-content-space-between navBar container">
        <h1 className="logo">VILLA</h1>

        <ul className="navbar-ul list-style-none display-flex align-item-center margin-zero">
          <li>
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </li>
          <li>
            <Link to="/properties" className="text-decoration-none">
              Properties
            </Link>
          </li>
          <li>
            <Link to="/propertiesdetail" className="text-decoration-none">
              Property Detail
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-decoration-none">
              Contact Us
            </Link>
          </li>
          <ButtonComponent text={"Schedual a Vist"} active={true} />
        </ul>
        <span
          onClick={() => {
            setNavToggler(!navToggler);
          }}
          className="nav-toggler"
        >
          <FontAwesomeIcon
            className=" color-gray nav-toggler-icon"
            icon={navToggler ? faX : faBarsStaggered}
          />
        </span>
      </nav>

      <ul
        className={
          navToggler
            ? "navbar-list list-style-none display-flex flex-direction-column align-item-center margin-zero gap-30 margin-y-20 padding-zero"
            : "navbar-list list-style-none display-none margin-zero gap-30 margin-y-20 padding-zero"
        }
        // className="navbar-list list-style-none display-flex flex-direction-column align-item-center margin-zero gap-30 margin-y-20 padding-zero"
      >
        <li>
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </li>
        <li>
          <Link to="/properties" className="text-decoration-none">
            Properties
          </Link>
        </li>
        <li>
          <Link to="/propertiesdetail" className="text-decoration-none">
            Property Detail
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="text-decoration-none">
            Contact Us
          </Link>
        </li>
        <ButtonComponent text={"Schedual a Vist"} active={true} />
      </ul>
    </div>
  );
};

export default NavBar;
