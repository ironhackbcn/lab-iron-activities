import React, { Component } from 'react';
import ActivityList from './components/ActivityList';
import { Switch, Route, Link } from 'react-router-dom';
import Activity from './components/Activity';
import Cart from './components/Cart';
import tours from './data/data.json';

class App extends Component {

  state = {
    tours: tours.slice(0, 17),
    cart: [],
    isCartVisible: false,
    cartTotalPrice: 0,
  }

  updateCartTotal = () => {
    const { cart } = this.state;
    const sum = cart.reduce((acc, tour) => acc + tour.retail_price.value, 0)
    this.setState({
      cartTotalPrice: sum,
    });
  }

  findMatchingTour = (id) => {
    return tours.find((tour) => {
      return tour.uuid === id;
    });
  }

  addToCart = (id) => {
    const tour = this.findMatchingTour(id);
    this.setState({
      cart: [...this.state.cart,tour],
    }, this.updateCartTotal); 
  }

  removeFromCart = (id) => {
    const updatedCart = this.state.cart.filter((tour) => {
      return tour.uuid !== id;
    });
    this.setState({
      cart: updatedCart,
    }, this.updateCartTotal); 
  }

  handleCartVisibility = () => {
    const { isCartVisible } = this.state;
    this.setState({
      isCartVisible: !isCartVisible,
    }, this.displayCart)
  }

  displayCart = () => {
    const { cart, isCartVisible } = this.state;
    if(isCartVisible) {
      return <Cart cart={cart} removeItemHandler={this.removeFromCart}/>;
    }
  }

  render() {
    const { cart, cartTotalPrice } = this.state;
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/"><h1>Tours</h1></Link>
          <form className="form-inline">
            <p>{`$ ${cartTotalPrice}`}</p>
            <i className="fas fa-shopping-cart" onClick={this.handleCartVisibility}></i>
            <i className="fas fa-star"></i>
          </form>
        </nav>
        {this.displayCart()}
        <Link to='/activities'><button className="btn btn-lg btn-outline-secondary main">Show activities</button></Link>
        <Switch>
          <Route exact path='/activities' render={() =>  
            <ActivityList cart={cart} addToCartHandler={this.addToCart}/>       
            }>
          </Route>
          <Route exact path='/activities/:id' component={Activity}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
