import React from 'react';
import actionTypes from '../store/actionTypes';

const Button = ({ index, action, title, updateClass }) => {

  const handleClick = (e) => {
    updateClass('added');

    if (title === 'ADD TO CART')
      action(actionTypes.ADD_ACTIVITY,index);
    else
      action(actionTypes.REMOVE_ACTIVITY,index);

  }

  return (
    <div className="text-center">
      <button type="button" className="btn btn-success" onClick={handleClick}>{title}</button>
    </div>
  )
}

export default Button;