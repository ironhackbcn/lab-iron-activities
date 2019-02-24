import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.css';
import CartItem from '../cartItem/CartItem';
import Buble from '../buble/Buble';

export default class Cart extends Component {

  state = {
    clicked: false,
  }

  handleClick = () => {
    const { clicked } = this.state;    
    this.setState({
      clicked: !clicked,
    });
  };

  listItems = () =>{
    const { items } = this.props;
    return items.map((item, index) => {
      return <CartItem
        key={`${item.title}-${item.index}`}
        title={item.title}
        type={this.props.type}
        index={index}
        url={item.url}
        price={item.price}
        deleteFromCart={this.props.deleteFromCart}
        deleteFromFavourites={this.props.deleteFromFavourites}      
        />
    });
  }

  render() {
    return (
      <div>
        <Buble
          numberOfItems={this.props.items.length}
        />
        <button
          className="icon" 
          onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.props.icon} />
        </button>
        {(this.state.clicked ?
          <div className="cart">
            {this.listItems()}
          </div>
          :
          <div className="empty-cart"></div>
        )}
      </div>
    )
  }
}
