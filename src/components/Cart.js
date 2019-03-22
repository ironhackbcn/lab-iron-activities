import React from 'react';
import { withContext } from './Provider'


const Cart = (props) => {

  let card = {};

  function renderList() {
    if (props.cart.length > 0) {
      return props.cart.map((e, index) => {
        return (<li key={index}>
          <img src={e.image} alt={e.title} width='150px' />{e.title}
          <button onClick={(event) => props.addCart(event, {
            image: e.image,
            title: e.title,
            description: e.description,
            price: e.price
          })}>Delete</button>
        </li>)
      });
    } else {
      return (<p>
        Your cart is empty
        </p>);
    }

  }
  return (
    <div>
      <h2>Cart List</h2>
      <ul>
        {renderList()}
      </ul>

    </div>
  );
}
export default withContext(Cart);