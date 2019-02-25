import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../styles/card.css';

export default class Card extends Component {

  state = {
    isInCart: false,
    isFav: false,
  }

  handleClickCart = () => {
    const { activity } = this.props;
    const addToCart = this.props.addToCart;
    const deleteFromCart = this.props.deleteFromCart;
    const newIsInCart = !this.state.isInCart;
    if (this.state.isInCart) {
      deleteFromCart(activity)
    } else {
      addToCart(activity);
    }
    this.setState({
      isInCart: newIsInCart,
    })
  }

  handleClickFav = () => {
    const { activity } = this.props;
    const addToFav = this.props.addToFav;
    const unFav = this.props.unFav;
    const newIsFav = !this.state.isFav;
    if (this.state.isFav) {
      unFav(activity);
    } else {
      addToFav(activity);
    }
    this.setState({
      isFav: newIsFav,
    })
  }

  render() {
    const { activity } = this.props;
    return (
      <div className="card">
        <div className="card-img-container">
          <img src={activity.cover_image_url} alt=""/>
        </div>
        <button id="addFav-button"
          className={this.state.isFav ? 'fav-button toggled-button' : 'fav-button untoggled-button'}
          onClick={this.handleClickFav}>
          <i className="fas fa-star"></i>
        </button>
        <h1><Link to={`/activities/${activity.uuid}`}>{activity.title}</Link></h1>
        <p>{activity.description}</p>
        <p>{activity.retail_price.formatted_value}</p>
        <button id="addCart-button" 
          className={this.state.isInCart ? 'add-button toggled-button' : 'add-button untoggled-button'}
          onClick={this.handleClickCart}>
            {this.state.isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    )
  }
}
