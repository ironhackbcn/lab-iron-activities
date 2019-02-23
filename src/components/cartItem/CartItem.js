import React, { Component } from 'react';
import './cartItem.css';

export default class CartItem extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <img src={this.props.url} alt={this.props.title} className="image"/>
        </div>
        <p className="title">{this.props.title}</p>
        <p className="price">{this.props.price}</p>
        <button className="delete">X</button>
      </div>
    )
  }
}
