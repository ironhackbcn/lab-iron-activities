import React from 'react';
import actionTypes from '../store/actionTypes'

const FavButton = ({ index, action, updateClass, selected }) => {

  const handleClick = (e) => {
    updateClass('fav');

    if (selected === 'far')
      action(actionTypes.ADD_FAV,index);
    else
      action(actionTypes.REMOVE_FAV,index);
  }

  return (
    <i className={selected+" fa-star"} onClick={handleClick}></i>
  )
}

export default FavButton;