import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.css';
import CartItem from '../cartItem/CartItem';

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

    return items.map(item => {
      return <CartItem
        title={item.title}
        url={item.url}
        price={item.price}
        deleteFromCart={this.props.deleteFromCart}        
        />
    });
  }

  render() {
    return (
      <div>
        <button
          className="icon" 
          onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.props.icon} />
        </button>
        {(this.state.clicked ?
          <div className="carts">
            {this.listItems()}
          </div>
          : null
        )}
      </div>
    )
  }
}
