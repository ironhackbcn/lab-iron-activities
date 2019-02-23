import React, { Component } from 'react'
import './card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="image-container">
          <img className="image" src={this.props.url} alt={this.props.title} />
        </div>
        <h2 className="card-title">{this.props.title}</h2>
        <p className="card-desc">{this.props.description}</p>
        <p className="price">{this.props.price}</p>
        <button className="btn">add to cart</button>
      </div>
    )
  }
}
