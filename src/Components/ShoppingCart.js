import React, { Component } from 'react'

export default class ShoppingCart extends Component {
  cartHandler= ()=>{


  }
  render() {
    return (
      <div>
        <p>{this.props.activities.filter((activity)=>activity.ordered === true).count}</p>
        <button onClick={this.cartHandler}><img src="./assets/cart.svg" alt="shoppingCart" width="30px" height="30px"/></button>
      </div>
    )
  }
}
