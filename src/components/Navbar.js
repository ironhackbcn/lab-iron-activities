import React from 'react';
import { withContext } from './Provider'


const Navbar = (props) => {

  let totalPrice = 0;
  let totalText = '';
  props.cart.forEach(e=> totalPrice += parseFloat(e.price));

  if (totalPrice > 0){
    totalText = `Total: ${totalPrice} $`
  }
  return (
    <div className="navbar">
      <h2>BRAND</h2>
      <ul>
        <li><button>Favorites</button>{props.favorites.length}</li>
        <li><button onClick={props.showCart}>Cart</button>{props.cart.length} {totalText}</li>
      </ul>

    </div>
  );
}
export default withContext(Navbar);