import React, { Component } from 'react'
import { Consumer } from '../App';

export class Cart extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            console.log(value)
            return(
              <button className="button is-primary">
                <span className="icon is-small">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>{value.cart.length} Favorite</span>
              </button>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Cart
