import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './card.css';

export default class Card extends Component {

  state={
    clicked: false,
  }

  handleClick = () => {
    const { clicked } = this.state;
    const itemBought = {
      title: this.props.title,
      price: this.props.price,
      url: this.props.url,
    }
    this.setState({
      clicked: !clicked,
    })
    this.props.addToCart(itemBought);
  };


  render() {
    return (
      <div className="card">
        <div className="image-container">
          <img className="image" src={this.props.url} alt={this.props.title} />
        </div>
        <h2 className="card-title">{this.props.title}</h2>
        <p className="card-desc">{this.props.description}</p>
        <Link to={this.props.idUrl}>More Details</Link>
        <p className="price">{this.props.price}</p>
        <button 
          className="btn" 
          onClick={this.handleClick}
          >
          {(this.state.clicked ? 'IN CART' : 'ADD TO CART')}
        </button>
      </div>
    )
  }
}
