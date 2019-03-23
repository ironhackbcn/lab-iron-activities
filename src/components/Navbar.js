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
            <div className="control">
              <Favorite />
            </div>
            <div className="control">
              <Cart />
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar

