import React, { Component } from 'react'
import { Consumer } from '../App';

export class Favorite extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => (
            <button className="button is-primary">
              <span className="icon is-small">
                <i className="fas fa-star"></i>
              </span>
              <span>{value.favorite.length} Favorites</span>
            </button>
          )
        }

      </Consumer>




    )
  }
}

export default Favorite
