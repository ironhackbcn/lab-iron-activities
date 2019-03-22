import React, { Component } from 'react';
import CartItem from './CartItem';
import '../styles/cart.css';

export default class Cart extends Component {
    
  state = {
    showCart: false,
  }; 
  
  showCart = (event) => {
    event.preventDefault();
    this.setState({ showCart: true }, () => {
      document.addEventListener('click', this.closeCart);
    });
  }
  
  closeCart = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showCart: false }, () => {
        document.removeEventListener('click', this.closeCart);
      });  
    }
  }

  listCartItems = () => {
    const cartItems = this.props.cart;
    if (cartItems.length === 0) {
      return <p>Empty cart</p>
    } else {
      return cartItems.map((item, index) => {
        return < CartItem item={item} />
      })
    }
  } 

  render() {
    return (
      <div>
        <button onClick={this.showCart}>
          <i className="fas fa-shopping-cart"><sup>{this.props.cart.length > 0 ? this.props.cart.length : ''}</sup></i>
        </button>
        {
          this.state.showCart
            ? (
              <div
                className="cart"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {this.listCartItems()}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}