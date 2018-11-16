import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Hacker from './Hacker.js';

class App extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Hacker alignment="center" />
      </div>
    );
  }
}

export default App;
