import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="#">Code Rebellion</a>
        <div className="links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
