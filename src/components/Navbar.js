import React, { Component } from 'react'

// Components
import Cart from './Cart'
import Favorite from './Favorite'
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-primary is-flex-mobile">
        <div className="container">
          <div className="field is-grouped">
            <p className="control">
              <Favorite />
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

