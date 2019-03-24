import React, { Component } from 'react'
import { Consumer } from '../App';

export class ButtonFavorite extends Component {

  // Si el uuid de de l'activitat SI està dins del array favorite --> isActivityInsideFavorite: true
  // Si el uuid de de l'activitat NO està dins del array favorite --> isActivityInsideFavorite: false

  handleIsActivityInsideFavorite = (favoriteList) => {
    const isActivityInsideFavorite = favoriteList.find(activity => (
      activity.uuid === (this.props.activity.uuid)
    ))
    return isActivityInsideFavorite
  }

  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <div>
                {
                  (this.handleIsActivityInsideFavorite(value.favorite))
                    ? <button className="button is-success is-favorite">
                      <span className="icon is-small">
                        <i className="fas fa-star"></i>
                      </span>
                    </button>
                    : <button onClick={() => value.addToFavorite(this.props.activity)} className="button is-white is-favorite">
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
