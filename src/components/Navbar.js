import React from 'react';
import { withContext } from './Provider'
import blackStar from '../images/black-star.png';
import cart from '../images/cart.png';


const Navbar = (props) => {

  let totalPrice = 0;
  let totalText = '';
  props.cart.forEach(e => totalPrice += parseFloat(e.price));

  if (totalPrice > 0) {
    totalText = `${totalPrice} $`
  }
  return (
    <div className="navbar">
      <h2>BRAND</h2>
      <ul className="fav-cart">
        <li><p>{totalText}</p><div className="cart"><div className="badge">{props.cart.length}</div><button onClick={props.showCart}><img src={cart} alt="star" width="40px"/></button></div></li>
        <li><div className="favorites"><div className="badge">{props.favorites.length}</div><img src={blackStar} alt="star" width="40px"/></div></li>
      </ul>

    </div>
  );
}
export default withContext(Navbar);