import React, { Component } from 'react'
import { Consumer } from '../App'

class ButtonCart extends Component {

  state = {
    isAddToCart: false,
  }

  handleClick = (addToCart) => {
    if (!this.state.isAddToCart) {
      this.setState(
        { isAddToCart: true }
      )
      addToCart(this.props.activity)
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
                  (this.state.isAddToCart)
                    ? <button disabled className='button is-success disabled'>Booked</button>
                    : <button onClick={() => { this.handleClick(value.addToCart) }} className='button is-link'>Add to cart</button>
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

