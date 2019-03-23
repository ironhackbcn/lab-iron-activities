import React from 'react';
import { withContext } from './Provider'
import grayStar from '../images/gray-star.png';
import blackStar from '../images/black-star.png';

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

  const imageStyle = {
    position: 'relative',
    padding: '15px'
  }

  let favStyle = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    backgroundColor: 'white',
    border: '0.5px solid gray',
    color: '#3d3d3d',
    width: '50px',
    height: '50px',
    borderRadius: '50px',
  }

  return (
    <div className="card">
      <div style={imageStyle}>
        <button onClick={(e) => props.addFavorites(e, card)} style={favStyle}>{inFavorites ? <img src={blackStar} alt="star" width="30px"/>: <img src={grayStar} alt="star" width="30px"/> }</button>
        <img src={props.image} alt={props.title} width='300px' />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h3>$ {props.price.toFixed(2)}</h3>
      <button onClick={(e) => props.addCart(e, card)} className={inCart ? "selected-cart-button" : "cart-button"} >{inCart ? "In cart" : "Add cart"}</button>
    </div>
  );
}
export default withContext(Card);