import React, { Component } from 'react';
import './Hacker.css';

class Hacker extends Component {
  render() {
    return (
      <section id="hacker" align={this.props.alignment}>
        <a href="http://hackertyper.net">HackerTyper.net</a><br /><br /><br />
        <iframe src="http://hackertyper.net"></iframe>
        <p>While you're here, hack away!</p>
      </section>
    );
  }
}

export default Hacker;
