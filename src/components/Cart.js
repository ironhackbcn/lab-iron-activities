import React, { Component } from 'react'
import { Consumer } from '../App';

export class Cart extends Component {

  handleRemoveActivity = (cartActivities) => {
    console.log(cartActivities);

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
                    value.cart.map(activity =>{
                      return(
                        <React.Fragment>
                          <div className="dropdown-item">
                            <img src={activity.cover_image_url} alt={activity.title}/>
                            <p className="description">{activity.title}</p>
                          </div>
                          <hr className="dropdown-divider"></hr>
                        </React.Fragment>
                      ) 
                    })
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

// <button onClick={() => { this.handleRemoveActivity(value.cart) }} className="button is-primary">
//   <span className="icon is-small">
//     <i className="fas fa-shopping-cart"></i>
//   </span>
//   <span>{value.cart.length} Activities</span>
// </button>