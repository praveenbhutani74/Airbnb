import React from "react";
import AirbnbLogo from "../assets/Vector.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <img src={AirbnbLogo} alt="Logo" className="AirbnbImage" />
      </nav>
    </>
  );
};

export default Navbar;
