import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

export default class Card extends Component {

  state={
    inCart: false,
    inFavourites: false,
  }

  addCart = () => {
    const { inCart } = this.state;
    const itemBought = {
      title: this.props.title,
      price: this.props.price,
      url: this.props.url,
    }
    this.setState({
      inCart: !inCart,
    });
    this.props.addToCart(itemBought);
  };

  addFavourites = () => {
    const { inFavourites } = this.state;
    const itemFavourite = {
      title: this.props.title,
      price: this.props.price,
      url: this.props.url,
    }
    this.setState({
      inFavourites: !inFavourites,
    });
    this.props.addToFavourites(itemFavourite);
  };


  render() {
    return (
      <div className='card'>
        <div className='image-container'>
          <img className='image' src={this.props.url} alt={this.props.title} />
        </div>
        <h2 className='card-title'>{this.props.title}</h2>
        <p className='card-desc'>{this.props.description}</p>
        <Link to={this.props.idUrl}>More Details</Link>
        <p className='price'>{this.props.price}</p>
        <button 
          className='btn' 
          onClick={this.addCart}
          >
          {(this.state.inCart ? 'IN CART' : 'ADD TO CART')}
        </button>
        <button 
          className='bubble' 
          onClick={this.addFavourites}
          >
          <FontAwesomeIcon icon='star' />
        </button>
      </div>
    )
  }
}
