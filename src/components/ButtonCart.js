import React, { Component } from 'react'
import { Consumer } from '../App'

class ButtonCart extends Component {

  // Si el uuid de de l'activitat actual SI està dins del array cart --> isActivityInsideCart: true
  // Si el uuid de de l'activitat actual NO està dins del array cart --> isActivityInsideCart: false
  handleIsActivityInsideCart = (cartList) => {
    let isActivityInsideCart = false
    cartList.forEach(activity => {
      if (this.props.activity.uuid === activity.uuid) {
        isActivityInsideCart = true
      }
    })
    return isActivityInsideCart
  }

  render() {
    return (
      <Consumer>
        {
          (value) => {
            console.log(this.handleIsActivityInsideCart(value.cart))
            return (
              <div>
                {
                  (this.handleIsActivityInsideCart(value.cart))
                    ? <button className='button is-success disabled'>Booked</button>
                    : <button onClick={() => value.addToCart(this.props.activity) } className='button is-link'>Add to cart</button>
                }
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default ButtonCart