import React, { Component } from 'react'
import { Consumer } from '../App'

class Button extends Component {

  state = {
    isAddToCart: false,
  }

  handleClick = (addToCart) => {
    this.setState(
      { isAddToCart: !this.state.isAddToCart }
    )
    if(!this.state.isAddToCart){
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

export default Button

