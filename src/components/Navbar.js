import React, {Component} from 'react';
import Icons from './Icons';
import Cart from './Cart'

class Navbar extends Component {
  state = {
    cartIsShown: false
  }

  handleDelete =(index) => {    
    this.props.onDelete(index)
  }

  toggleCart =() => {    
    this.setState({
      cartIsShown: !this.state.cartIsShown
    })    
  }

  render() {    
    return(
      <nav>
        <h1>BRAND</h1>
        <p>Total: {this.props.total} €</p>   
        <div>
          <div className="dropdown is-right is-active">
            <div className="dropdown-trigger">
              <Icons onShow={this.toggleCart} aria-haspopup="true" aria-controls="dropdown-menu"/>
              <div className="dropdown-menu" id="dropdown-menu6" role="menu">
                {this.state.cartIsShown && <Cart onDelete={this.handleDelete}/>}              
              </div>
            </div>    
          </div>
          <i className="fas fa-star"></i>
          <p className="my-notification fav">{this.props.fav.length}</p> 
        </div>
      </nav>
    )
  }
}

export default Navbar;