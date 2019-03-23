import React, { Component } from 'react'
import { Consumer } from '../App';

export class ButtonFavorite extends Component {

  state = {
    isFavorite: false,
  }

  handleClick = (addToFavorite) => {
    if (!this.state.isFavorite) {
      this.setState(
        { isFavorite: true }
      )
      addToFavorite(this.props.activity)
    }
  }

  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <div>
                {
                  (this.state.isFavorite)
                  ? <button onClick={() => { this.handleClick(value.addToFavorite) }} className="button is-success is-favorite">
                      <span className="icon is-small">
                        <i className="fas fa-star"></i>
                      </span>
                    </button>
                  : <button onClick={() => { this.handleClick(value.addToFavorite) }} className="button is-white is-favorite">
                      <span className="icon is-small">
                        <i className="fas fa-star"></i>
                      </span>
                    </button>
                }
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default ButtonFavorite
