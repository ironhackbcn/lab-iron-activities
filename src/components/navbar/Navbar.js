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
          type='shoping-cart'
          deleteFromCart={this.props.deleteFromCart}
          deleteFromFavourites={this.props.deleteFromFavourites}
          />
        <Cart
          items={this.props.favourites}
          icon='star'
          type='favourites'
          deleteFromCart={this.props.deleteFromCart}
          deleteFromFavourites={this.props.deleteFromFavourites}
          />
        </div>
      </div>
    )
  }
}
