import React, { useState } from 'react';
import { withCounter } from './context/Provider';
import roundToTwoDecimals from '../helpers/twoDecimals'

export const Navbar = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState({ added: false, faved: false });
  const { totalAmount, counterCart, counterFav, addedCards, favedCards, deleteCardFromList } = props.appContext;
  //const twoDecimalAmount = roundToTwoDecimals(totalAmount);
  return (
    <div className='nav'>
      <ul className='nav-items'>
        <li className='nav-total'><b>Total: </b>{`${totalAmount.toFixed(2)} €`}</li>
        <li>
          <div>
            <p className='counter add'>{counterCart}</p>
            <button onClick={() => {
              setToggleDropdown({ added: !toggleDropdown.added })
            }
            }>
              <img className='nav-img' src='https://image.flaticon.com/icons/svg/44/44937.svg' alt='cart' />
            </button>
          </div>
        </li>
        <li>
          <div>
            <p className='counter fav'>{counterFav}</p>
            <button onClick={() => {
              setToggleDropdown({ faved: !toggleDropdown.faved })
            }
            }>
              <img className='nav-img' src='https://image.flaticon.com/icons/svg/118/118669.svg' alt='star' />
            </button>
          </div>
        </li>
      </ul>
      {toggleDropdown.added ? (addedCards.length > 0) ?
        <ul className='nav-add-list'>
          {/* <button onClick={() => setToggleDropdown({ faved: false, added: false })}>x</button> */}
          {addedCards.map((card, index) => {
            return <li key={`${card.name}${index}`} className='nav-list-items' >
              <img src={card.cover_image_url} alt={card.title} />
              <p className='list-text'>{card.title}</p>
              <div className='delete-total-list'>
                <button className='delete-item-list' onClick={() => deleteCardFromList(card, 'add')}>x</button>
                <p>{card.retail_price.formatted_value}</p>
              </div>
            </li>
          })}
        </ul> :
        <div className='nav-add-list'>
          {/* <button onClick={() => setToggleDropdown({ faved: false, added: false })}>x</button> */}
          <p className='empty-text'>Your cart is empty</p>
        </div> : <span />
      }
      {toggleDropdown.faved ? (favedCards.length > 0) ?
        <ul id='nav-fav-list' class='nav-add-list'>
          {/* <button onClick={() => setToggleDropdown({ faved: false, added: false })}>x</button> */}
          {favedCards.map((card, index) => {
            return <li className='nav-list-items' key={`${index}${card.title}`}>
              <img src={card.cover_image_url} alt={card.title} />
              <p className='list-text'>{card.title}</p>
              <div className='delete-total-list'>
                <button className='delete-item-list' onClick={() => deleteCardFromList(card, 'fav')}>x</button>
                <p>{card.retail_price.formatted_value}</p>
              </div>
            </li>
          })}
        </ul> :
        <div id='nav-fav-list' className='nav-add-list'>
          {/* <button onClick={() => setToggleDropdown({ faved: false, added: false })}>x</button> */}
          <p className='empty-text'>Your favourite list is empty</p>
        </div> : <span />
      }
    </div>
  );
}

export default withCounter(Navbar);