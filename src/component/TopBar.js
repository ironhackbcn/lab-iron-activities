import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton';
import {WithStore} from '../store/Store';

class TopBar extends Component {
  render () {
    const {budget, reserved, favs} = this.props.context;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Activities</Link>
        <div className="d-flex justify-content-end align-items-center">
          <span className="mr-2">$ {budget}</span>
          <DropdownButton type='Budget' color='primary' badge={reserved}/>
          <DropdownButton type='Favs' color='success' badge={favs}/>
        </div>
      </nav>
    )
  }
}

export default WithStore(TopBar);