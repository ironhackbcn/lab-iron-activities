import React, { Component } from 'react';
import data from './data/data.json';
import { Route, Switch, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart';
import './styles/app.css';

class App extends Component {

  state = {
    activities: data,
    cartActivities: [],
    favActivities: [],
  }

  addToCart = (activity) => {
    const { cartActivities } = this.state;
    const newCartActivities = [...cartActivities, activity];
    this.setState({
      cartActivities: newCartActivities,
    })
  }

  deleteFromCart = (activity) => {
    const { cartActivities } = this.state;
    const newCartActivities = cartActivities.filter(cartActivity => cartActivity.uuid !== activity.uuid);
    this.setState({
      cartActivities: newCartActivities,
    })
  }

  addToFav = (activity) => {
    const { favActivities } = this.state;
    const newFavActivities = [...favActivities, activity];
    this.setState({
      favActivities: newFavActivities,
    })
  }

  unFav = (activity) => {
    const { favActivities } = this.state;
    const newFavActivities = favActivities.filter(favActivity => favActivity.uuid !== activity.uuid);
    this.setState({
      favActivities: newFavActivities,
    })
  }

  render() {
    return (
      <div className='App'>

        <NavBar cart={this.state.cartActivities} favs={this.state.favActivities} buildCart= {this.buildCart} />
          {this.buildCart}

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/activities' render={() => 
            <CardList 
              addToCart = {this.addToCart}
              deleteFromCart = {this.deleteFromCart}
              addToFav = {this.addToFav}
              unFav = {this.unFav} />}
          />
          <Route path='/activities/:id' component={ CardDetails } />
        </Switch>

      </div>
    );
  }
}

export default App;
