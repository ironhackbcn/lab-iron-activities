import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo-container">
          <span>BRAND</span>
        </div>
        <ul className="navbar-link-list">
          <li className="navbar-link"><Link to="/">Home</Link></li>
          <li className="navbar-link"><Link to="/activities">Activities</Link></li>
        </ul>
      </nav>
    )
  }
}
