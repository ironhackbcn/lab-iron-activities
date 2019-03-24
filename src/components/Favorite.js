import React, { Component } from 'react'
import { Consumer } from '../App';

export class Favorite extends Component {

  handleClick(favoriteActivities, removeFromFavorite, event) {
    event.stopPropagation()
    const uuid = event.target.value
    const updateFavoriteActivities = favoriteActivities.filter(activity => {
      return uuid !== activity.uuid
    })
    removeFromFavorite(updateFavoriteActivities)
  }

  render() {
    return (
      <Consumer>
        {
          (value) => (
            <div className="dropdown is-hoverable is-right">
              <div className="dropdown-trigger">
                <button className="button is-primary">
                  <span className="icon is-small">
                    <i className="fas fa-star"></i>
                  </span>
                  <span>{value.favorite.length} Favorites</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {
                    (value.favorite.length > 0) ?
                      value.favorite.map(activity => {
                        return (
                          <React.Fragment key={activity.uuid}>
                            <div className="dropdown-item">
                              <img src={activity.cover_image_url} alt={activity.title} />
                              <button
                                onClick={(event) => this.handleClick(value.favorite, value.removeFromFavorite, event)}
                                className="icon is-small remove-activity"
                                value={activity.uuid}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                              <p className="description">{activity.title}</p>
                            </div>
                            <hr className="dropdown-divider"></hr>
                          </React.Fragment>
                        )
                      })
                      : <div className="dropdown-item">You don't have favorites yet</div>
                  }
                </div>
              </div>
            </div>
          )
        }
      </Consumer>
    )
  }
}

export default Favorite