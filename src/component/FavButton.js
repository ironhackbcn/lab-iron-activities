import React from 'react';

const FavButton = ({ index, action, updateClass, selected }) => {

  const handleClick = (e) => {
    updateClass('fav');
    action(index);
  }

  return (
    <i className={selected+" fa-star"} onClick={handleClick}></i>
  )
}

export default FavButton;