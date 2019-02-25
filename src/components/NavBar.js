import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import '../styles/navbar.css';
import Cart from './Cart';

export default class Navbar extends Component {

  render() {
    const cart = this.props.cart;
    const favs = this.props.favs;
    return (
      <nav className="navbar">
        <div className="navbar-logo-container">
          <span>BRAND</span>
        </div>
        <ul className="navbar-link-list">
          <li className="navbar-link"><Link to="/">Home</Link></li>
          <li className="navbar-link"><Link to="/activities">Activities</Link></li>
        </ul>
        <div className="navbar-icons-container">
          < Cart cart={cart} />
          <span><i className="fas fa-star"></i><sup>{favs.length > 0 ? favs.length : ''}</sup></span>
        </div>
      </nav>
    )
  }
}
