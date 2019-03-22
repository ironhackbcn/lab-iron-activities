import React from 'react';
import { withContext } from './Provider'


const Card = (props) => {
  const card = {
    image: props.image,
    title: props.title,
    description: props.description,
    price: props.price
  }

  let inFavorites = false;
  let inCart = false;

  props.favorites.forEach((e, i) => {
    if (props.title === e.title) {
      inFavorites = true;
    }
  });

  props.cart.forEach((e, i) => {
    if (props.title === e.title) {
      inCart = true;
    }
  });

  let favStyle = {
    backgroundColor: 'white',
    border: '1px solid black'
  }

  let cartStyle = {
    backgroundColor: 'white',
    border: '1px solid black'
  }

  if (inFavorites) {
    favStyle.backgroundColor = 'red';
  }

  if (inCart) {
    cartStyle.backgroundColor = 'red';
  }
  return (
    <div>
      <button onClick={(e) => props.addFavorites(e, card)} style={favStyle}>FAV</button>
      <img src={props.image} alt={props.title} width='300px' />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>$ {props.price.toFixed(2)}</p>
      {props.counter}
      <button onClick={(e) => props.addCart(e, card)} style={cartStyle}>Add Cart</button>
    </div>
  );
}
export default withContext(Card);