import React from "react";
import guitify from "../assets/logo/guitify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={guitify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Guitify</h1>
      </Link>
    </div>
  );
};

export default Header;
