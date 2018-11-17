import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="#">Code Rebellion</a>
        <span className="mlinks" align="right">
          <a href="#"><img src={require("./list.svg")} /></a>
        </span>
        <span className="links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </span>
      </nav>
    );
  }
}

export default Navbar;
