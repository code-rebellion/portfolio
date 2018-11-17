import React, { Component } from 'react';
import './Hacker.css';

const hackStyle = {
  "overflow": "hidden",
  "width": String(Math.min(window.innerWidth - 17, 640)) + "px",
  "height": "480px"
};

class Hacker extends Component {
  render() {
    return (
      <section id="hacker" align={this.props.alignment}>
        <a href="https://hackertyper.net">HackerTyper.net</a><br /><br /><br />
        <iframe style={hackStyle} src="https://hackertyper.net"></iframe>
        <p>While you're here, hack away!</p>
      </section>
    );
  }
}

export default Hacker;
