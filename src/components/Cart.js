import React, { Component } from 'react'

class Cart extends Component {

  listTours = () => {
    const { cart } = this.props;
    const defaultMessage = 'Cart is empty';
    if(cart.length === 0) {
      return (
        <div className="card-body">
          <p className="card-text">{defaultMessage}</p>
        </div>
      );
    } else {
      return cart.map((tour) => {
        return (
          <div key={tour.uuid} className="card-body">
            <img src={tour.cover_image_url} alt="tour"></img>
            <h5 className="card-title">{tour.title}</h5>
            <p className="card-text">{tour.retail_price.formatted_value}</p>
            <i className="fas fa-trash" onClick={() => this.removeTourFromCart(tour.uuid)}></i>
          </div>
        );
      });
    }
  }

  removeTourFromCart = (id) => {
    const { removeItemHandler } = this.props;
    removeItemHandler(id);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Cart
        </div>
        {this.listTours()}
      </div>
    )
  }
}

export default Cart;
