import React from "react";
import heroImage from "../images/illustration-working.svg";
import "./Hero.css";
import { Link } from "react-scroll";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="heroImageContainer">
          <img
            id="heroImage"
            src={heroImage}
            alt="Illustration of person sitting in front of desk"
          />
        </div>
        <h1>
          More than just <br /> shorter links
        </h1>
        <h2>
          Build your brand's recognition and get detailed
          <br /> insights on how your links are performing.
        </h2>
        <Link
          className="getStartedButton"
          activeClass="active"
          to="input"
          spy={true}
          smooth={true}
        >
          Get Started
        </Link>
      </div>
    );
  }
}

export default Hero;
