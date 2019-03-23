import React, { Component } from 'react'

// Components
import Cart from './Cart'
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-primary is-flex-mobile">
        <div className="container">
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-primary">
                <span className="icon is-small">
                  <i className="fas fa-star"></i>
                </span>
                <span>Favorite</span>
              </button>
            </p>
            <p className="control">
              <Cart />
            </p>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar

