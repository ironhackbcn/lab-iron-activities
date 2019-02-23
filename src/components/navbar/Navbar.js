import React, { Component } from 'react'
import './navbar.css';
import Cart from '../cart/Cart';

export default class Navbar extends Component {



  render() {
    return (
      <div className="navbar">
        <p className="logo">BRAND</p>
        <div className="carts">
        <p className="total"></p>
        <Cart
          items={this.props.cart}
          icon='shopping-cart'
          deleteFromCart={this.props.deleteFromCart}
          />
        <Cart
          items={this.props.favourites}
          icon='star'
          />
        </div>
      </div>
    )
  }
}
