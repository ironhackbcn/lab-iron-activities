import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton';
import MiniList from './MiniList';

const TopBar = ({budget, reserved, favs}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Activities</Link>
      <div className="text-right">
        <span className="mr-2">$ {budget}</span>
        <DropdownButton type='Budget' color='primary' badge={reserved.length}/>
        <DropdownButton type='Favs' color='success' badge={favs.length}/>
        <MiniList />
      </div>
    </nav>
  )
}


export default TopBar;