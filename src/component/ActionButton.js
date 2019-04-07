import React from 'react';

const Button = ({ index, action, title, updateClass }) => {

  const handleClick = (e) => {
    updateClass('added');
    action(index);
  }

  return (
    <div className="text-center">
      <button type="button" className="btn btn-success" onClick={handleClick}>{title}</button>
    </div>
  )
}

export default Button;