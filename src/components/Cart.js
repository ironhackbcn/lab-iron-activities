import React, { Component } from 'react'
import { Consumer } from '../App';

export class Cart extends Component {

  handleClick(cartActivities, removeFromCart, event) {
    event.stopPropagation()
    const uuid = event.target.value
    const updatedCartActivities = cartActivities.filter(activity => {
      return uuid !== activity.uuid
    })
    removeFromCart(updatedCartActivities)
  }

  render() {
    return (
      <Consumer>
        {
          (value) => {
            return (
              <div className="dropdown is-hoverable is-right">
                <div className="dropdown-trigger">
                  <button className="button is-primary">
                    <span className="icon is-small">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <span>{value.cart.length} Activities</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {
                      (value.cart.length > 0) ?
                        value.cart.map(activity => {
                          return (
                            <React.Fragment key={activity.uuid}>
                              <div className="dropdown-item">
                                <img src={activity.cover_image_url} alt={activity.title} />
                                <button
                                  onClick={(event) => this.handleClick(value.cart, value.removeFromCart, event)}
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
                        : <div className="dropdown-item">You don't have booked an activity yet!</div>
                    }
                  </div>
                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Cart