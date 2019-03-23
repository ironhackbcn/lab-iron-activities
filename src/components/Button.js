import React, { Component } from 'react'

class Button extends Component {

  checkCartForSpecificId = (id) => {
    const { cart } = this.props;
    return cart.filter((tour) => {
      return tour.uuid === id;
    });
  }

  checkIfIsInCart = () => {
    const { tourId } = this.props;
    if(this.checkCartForSpecificId(tourId).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  addToCart = (id) => {
    const { addToCartHandler } = this.props;
    const isInCart = this.checkIfIsInCart();
    
    if(!isInCart) {
      addToCartHandler(id);
    } 
  }

  render() {
    const { tourId } = this.props;
    if(this.checkIfIsInCart()) {
      return (
        <button className="btn btn-outline-secondary active" onClick={() => this.addToCart(tourId)}>
         In cart
        </button>
      );
    } else {
      return (
        <button className="btn btn-outline-secondary" onClick={() => this.addToCart(tourId)}>
         Add to cart
        </button>
      );
    }
  }
}

export default Button;
