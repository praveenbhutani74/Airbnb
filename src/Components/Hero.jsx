import React from "react";
import GridLogo from "../assets/Group.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="Hero-Main">
        <img src={GridLogo} alt="GridLogo1" className="GridImage" />
      </div>
      <div>
        <h1 className="Hero-h1">Online Experiences</h1>
        <p className="Herop">
          Join unique interactive activities led <br />
          by one-of-a-kind hosts all without
          <br />
          leaving home.
        </p>
      </div>
    </>
  );
};

export default Hero;
