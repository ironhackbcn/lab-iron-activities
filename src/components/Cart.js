import React from 'react';
import { withContext } from './Provider';


const Cart = (props) => {

  function renderList() {
    if (props.cart.length > 0) {
      return props.cart.map((e, index) => {
        return (<li key={index}>
          <img src={e.image} alt={e.title} width='150px' />{e.title}
          <p>$ {e.price.toFixed(2)}</p>
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

  function renderCartList() {
    console.log('SHOW CART ' + props.isCart);
    if (props.isCart) {
      return (
        <>
          <h2>Cart List</h2>
          <ul>
            {renderList()}
          </ul>
        </>
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