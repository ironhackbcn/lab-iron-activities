import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top is-primary">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">Cart</div>
            <span className="icon has-text-info">
              <i className="fas fa-info-circle"></i>
            </span>
            <div className="navbar-item">Favorite</div>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar

