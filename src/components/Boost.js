import React from "react";
import { Link } from "react-scroll";
import "./Boost.css";

class Boost extends React.Component {
  render() {
    return (
      <div className="boost">
        <div className="boostButtonContainer">
          <Link activeClass="active" to="input" spy={true} smooth={true}>
            Get Started
          </Link>
        </div>
      </div>
    );
  }
}

export default Boost;
