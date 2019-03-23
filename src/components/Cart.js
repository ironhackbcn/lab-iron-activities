import React from 'react';
import { withContext } from './Provider';
import cancel from '../images/cancel.png';


const Cart = (props) => {

  function renderList() {
    if (props.cart.length > 0) {
      return props.cart.map((e, index) => {
        return (<li key={index} className="cart-list-item">
          <img src={e.image} alt={e.title} height='100px' /><p>{e.title}</p>
          <div className="cart-list-item-column">
          <button onClick={(event) => props.addCart(event, {
            image: e.image,
            title: e.title,
            description: e.description,
            price: e.price
          })}><img src={cancel} alt="cancel" width="40px"/></button>
          <p>$ {e.price.toFixed(2)}</p>
          </div>
        </li>)
      });
    } else {
      return (<p>
        Your cart is empty
        </p>);
    }

  }

  function renderCartList() {
    if (props.isCart) {
      return (

        <ul className="cart-list">
          {renderList()}
        </ul>

      );
    } else {
      return (<></>);
    }
  }
  return (
    <div>
      {renderCartList()};
    </div>

  );
}
export default withContext(Cart);