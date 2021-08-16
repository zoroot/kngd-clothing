import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/kngd.png";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt="logo" />
    </Link>
    <div className="options">
      <Link classname="option" to="/shop">
        SHOP
      </Link>
      <Link classname="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
