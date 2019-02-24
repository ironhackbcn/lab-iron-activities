import React, { Component } from 'react';
import './cartItem.css';

export default class CartItem extends Component {

  handleDelete = () => {
    const { title, type } = this.props;
    (type === 'shoping-cart' ?
      this.props.deleteFromCart(title)
      : this.props.deleteFromFavourites(title)
    );
  }

  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-image-container">
          <img src={this.props.url} alt={this.props.title} className="cart-image"/>
        </div>
        <p className="title">{this.props.title}</p>
        <p className="price">{this.props.price}</p>
        <button className="delete" onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}
