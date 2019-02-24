import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import museumsList from './data/data.json';
import './Styles/app.css'

import Navbar from './components/navbar/Navbar.js';
import Card from './components/card/Card';
import CardDetails from './components/cardDetails/CardDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faStar);

class App extends Component {
  
  state = {
    museums: museumsList.splice(0, 18),
    inCartState: [],
    inCart: [],
    inFavouritesState: [],
    inFavourites: [],
  };

  addToCart = (item, state, index) => {
    const { inCart, inCartState } = this.state;
    inCart.push(item);
    inCartState[index] = state;

    this.setState({
      inCart: inCart,
      inCartState: inCartState,
    });
  };

  deleteFromCart = (name, state, index) => {
    const { inCart, inCartState } = this.state;
    const updatedCart = inCart.filter(item => item.title !== name);
    inCartState[index] = state;
    this.setState({
      inCart: updatedCart,
      inCartState: state,
    });
  };

  addToFavourites = (item) => {
    const { inFavourites } = this.state;
    inFavourites.push(item);
    this.setState({
      inFavourites: inFavourites,
    });
  };

  deleteFromFavourites = (name) => {
    const { inFavourites } = this.state;
    const updatedFavourites = inFavourites.filter(item => item.title !== name);

    this.setState({
      inFavourites: updatedFavourites,
    });
  };

  handleInCartState = (index, value) => {
    const updatedInCartState = [...this.state.inCartState];
    updatedInCartState[index] = value;

    this.setState({
        inCartState: updatedInCartState,
    });
  };

  listMuseums = () => {
    const { museums } = this.state;

    return museums.map((museum, index) => {

      return <Card
        key={museum.uuid}
        index={index}
        title={museum.title}
        description={museum.description}
        price={museum.retail_price.formatted_value}
        url={museum.cover_image_url}
        idUrl={`/activities/${museum.uuid}`}
        addToCart={this.addToCart}
        handleInCartState={this.handleInCartState}
        inCartState={this.state.inCartState}
        addToFavourites={this.addToFavourites}
        />
    });
  };

  render() {
    return (
      <div>
        <Navbar
          cart={this.state.inCart}
          favourites={this.state.inFavourites}
          deleteFromCart={this.deleteFromCart}
          />
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => {
              return(
                <div className="container">
                  {this.listMuseums()}
                </div>
              )
            }}>
            </Route>
            <Route path="/activities/:id" component={CardDetails} />              
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
