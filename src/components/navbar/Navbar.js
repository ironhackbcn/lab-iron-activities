import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p className="logo">BRAND</p>
        <div className="carts">
        <p className="total"></p>
        <div className="icon">
          <FontAwesomeIcon icon="shopping-cart" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon="star" />
        </div>
        </div>
      </div>
    )
  }
}
